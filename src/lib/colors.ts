export enum Color {
  Blue100 = "Blue100",
  Blue200 = "Blue200",
  Blue400 = "Blue400",
  Blue600 = "Blue600",
  Blue800 = "Blue800",
  Background = "Background",
  Gray200 = "Gray200",
  Gray500 = "Gray500",
  Gray900 = "Gray900",
  Yellow400 = "Yellow400",
}

const colorsMap: Record<Color, string> = {
  [Color.Blue100]: "#EBF8FF",
  [Color.Blue200]: "#BEE3F8",
  [Color.Blue200]: "#BEE3F8",
  [Color.Blue400]: "#63B3ED",
  [Color.Blue600]: "#3182CE",
  [Color.Blue800]: "#2C5282",
  [Color.Background]: "white",
  [Color.Gray200]: "#EDF2F7",
  [Color.Gray500]: "#A0AEC0",
  [Color.Gray900]: "#1A202C",
  [Color.Yellow400]: "#F6E05E",
}

export const getColor = (color: Color) => colorsMap[color]
