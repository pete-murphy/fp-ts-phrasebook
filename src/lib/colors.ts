export enum Color {
  Primary100 = "Primary100",
  Primary200 = "Primary200",
  Primary400 = "Primary400",
  Primary600 = "Primary600",
  Primary800 = "Primary800",
  Background = "Background",
  Gray200 = "Gray200",
  Gray500 = "Gray500",
  Gray900 = "Gray900",
}

const colorsMap: { [key in Color]: string } = {
  [Color.Primary100]: "#EBF8FF",
  [Color.Primary200]: "#BEE3F8",
  [Color.Primary200]: "#BEE3F8",
  [Color.Primary400]: "#63B3ED",
  [Color.Primary600]: "#3182CE",
  [Color.Primary800]: "#2C5282",
  [Color.Background]: "white",
  [Color.Gray200]: "#EDF2F7",
  [Color.Gray500]: "#A0AEC0",
  [Color.Gray900]: "#1A202C",
}

export const getColor = (color: Color) => colorsMap[color]
