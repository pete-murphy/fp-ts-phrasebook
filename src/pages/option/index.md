---
title: Option
date: "2019-10-26"
path: "/option"
---

Of all the `fp-ts` modules we use in our code, `Option` seems to be the most prevalent, and for that reason alone it would be worthwhile to get familiar with. I think it's also a good place to start within the `fp-ts` eco-system because it's relatively simple and some of the concepts learned herein are widely applicable.

---

## Computations that might fail

In JavaScript (and TypeScript) we often have to deal with values that might be `null` or `undefined`, and a common pattern for dealing with such values is to use a null check with conditional branching. Here's a contrived example.

```typescript
type User = {
  id: number
  name: string
}

const getUserName = (users: Array<User>, id: number) => {
  const matchedUser = users.find(user => user.id === id)
  return matchedUser && matchedUser.name
}
```

Here we're looking for a user, and then either returning the name of that user if they exist, or (implicitly) returning `undefined` if the lookup fails.
This "passes the buck" to the consumer of this function; they will also have to check that the name is not null before continuing.
While TypeScript usually helps to ensure we check for nullable values as needed, it's possible for these values to slip all the way through to the UI or some other place we didn't want them.

```tsx
<Greeting>Hello {getUserName(users, id)}!</Greeting>
// This type checks, but might render `Hello  !`
```

Instead of implicitly passing around null-ish values, a saner approach might be to explicitly encode the possibility of failure (or the possibility of a missing value) in the type of thing we're dealing with.
`Option` in `fp-ts` allows us to do just that.
`Option` is a type _constructor_ (like an `Array` or a `Set`) that takes another type as its "contents".
Indeed, one way to think of `Option` is as an array that is either empty or contains a single value.
The single value case looks like `some(x)` and the empty case is called `none`.

With that in mind we can implement our own primitive version:

```ts
type Option<T> = Array<T>
const none: Option<never> = []
const some = <T>(x: T): Option<T> => [x]
```

We could also define a utility function for converting `null` values to our option type

```ts
const fromNullable = <T>(x: T | null | undefined): Option<T> =>
  x == null ? none : some(x)
```

Now if we refactor our `getUserName`

```ts
const getUserName = (users: Array<User>, id: number): Option<string> => {
  const matchedUserOpt = fromNullable(users.find(user => user.id === id))
  return matchedUserOpt.map(user => user.name)
}
```

Note that the return type went from `string | undefined` to `Option<string>`, so any one using this function downstream has to take that into account.
The `map` here is nothing magic—it's just `Array.prototype.map`, which returns an empty array when called on an empty array, or transforms the inner values of an array when there are any.
It's no accident that this is exactly how `map` works for `Option`; it safely ignores the `none` case and only applies the passed in function to the `some` case.

## Chaining options

Suppose we add a nullable `address` field to our `User` type.

```ts{4}
type User = {
  id: number
  name: string
  address?: string
}
```

And we want to write `getUserAddress`. Here's a first pass

```ts
const getUserAddress = (users: Array<User>, id: number) => {
  const matchedUser = fromNullable(users.find(user => user.id === id))
  return matchedUser.map(user => user.address)
}
```

This might look like what we want, but if we inspect the return type we are actually returning `Option<string | undefined>`.
This is kind of a bummer and really undermines our whole operation of making the possibility of failure explicit.

Let's first try to use `fromNullable` again to change that `string | undefined` to an `Option<string>`.

```ts{3}
const getUserAddress = (users: Array<User>, id: number) => {
  const matchedUser = fromNullable(users.find(user => user.id === id))
  return matchedUser.map(user => fromNullable(user.address))
}
```

OK, but now we're returning a nested `Option<Option<string>>`, but really we only care about the cases where either (a) that address exists or (b) it doesn't.
So it seems like what we really want is just an `Option<string>`.
Is there any way of collapsing those nested `Option`s down to one layer?

If we step back for a minute and remember that our `Option` is just a synonym for `Array`, we realize we do indeed have built-in methods for collapsing that structure: there's `Array#flatten` and `Array#flatMap`.
Since we're already mapping we can make use of the latter, which in the `Option` module is called `chain`.

```ts{5}
Array.prototype.chain = Array.prototype.flatMap

const getUserAddress = (users: Array<User>, id: number) => {
  const matchedUser = fromNullable(users.find(user => user.id === id))
  return matchedUser.chain(user => fromNullable(user.address))
}
```

Extending the built-in prototypes is usually a bad idea, so from here on we'll just use `Option` class that `fp-ts` provides instead of our own version.

## Getting the value "out of" the option

-- talk about (implement?) getOrElsea / folding
