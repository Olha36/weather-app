import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

export const typography = {
  fontFamily: "Work Sans",
  h1: {
    fontSize: 40,
    fontWeight: 600,
    [breakpoints.down("md")]: { fontSize: 20 },
    [breakpoints.down("sm")]: { fontSize: 12 },
  },
  h2: {
    fontSize: 32,
    fontWeight: 500,
    [breakpoints.down("md")]: { fontSize: 24 },
    [breakpoints.down("sm")]: { fontSize: 16 },
  },

  subtitle1: {
    fontSize: 20,
    fontWeight: 500,
    [breakpoints.down("sm")]: { fontSize: 14 },
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 500,
    [breakpoints.down("sm")]: { fontSize: 14 },
  },
  body1: {
    fontSize: 24,
    fontWeight: 300,
    [breakpoints.down("sm")]: { fontSize: 16 },
  },
  body2: {
    fontSize: 14,
    fontWeight: 500,
    [breakpoints.down("sm")]: { fontSize: 12 },
  },
  caption: {
    fontSize: 12,
    fontWeight: 500,
    [breakpoints.down("sm")]: { fontSize: 10 },
  },
};
