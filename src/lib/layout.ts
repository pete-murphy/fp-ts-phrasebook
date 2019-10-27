export enum Breakpoint {
  Max600 = "Max600",
  Min600 = "Min600",
  Min900 = "Min900",
  Min1200 = "Min1200",
}

const breakpointMap: Record<Breakpoint, string> = {
  [Breakpoint.Max600]: "@media (max-width: 600px)",
  [Breakpoint.Min600]: "@media (min-width: 600px)",
  [Breakpoint.Min900]: "@media (min-width: 900px)",
  [Breakpoint.Min1200]: "@media (min-width: 1200px)",
}

export const getBreakpoint = (breakpoint: Breakpoint) =>
  breakpointMap[breakpoint]
