export enum Color {
  Primary = "Primary",
}

const colorsMap: { [key in Color]: string } = {
  [Color.Primary]: "tomato",
}

export const getColor = (color: Color) => colorsMap[color]
