import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { getBreakpoint, Breakpoint } from "lib/layout"
import { Color, getColor } from "lib/colors"

const routes = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/gallery",
    title: "Gallery",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/contact",
    title: "Contact",
  },
]

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleIsOpen = () => setIsOpen(s => !s)
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button onClick={toggleIsOpen}>{isOpen ? "X" : "="}</Button>
      </div>
      {isOpen ? (
        <Nav_>
          <ul>
            {routes.map(({ to, title }) => (
              <li key={to}>
                <Link to={to} activeClassName="active">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </Nav_>
      ) : null}
    </>
  )
}

const Button = styled.button`
  font-size: 4rem;
  background: none;
  border: none;
`

const Nav_ = styled.nav`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ul {
    display: grid;
    text-align: right;

    font-size: 2rem;
    grid-auto-flow: row;
    gap: 2rem;
    align-items: flex-end;
    a {
      text-decoration: none;
      color: ${getColor(Color.Gray500)};
    }
    .active {
      color: ${getColor(Color.Gray900)};
    }
  }

  grid-column: 1/3;

  ${getBreakpoint(Breakpoint.Min900)} {
  }
`
