"use client";

import MUIButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(MUIButton)(
  ({ size = "medium", variant, fullWidth }) => ({
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
    boxShadow: "none",
    backgroundColor: "#FFB36C",
    color: "#000000",
    marginRight: "27px",

    ...(size === "small" && {
      width: "150px",
      height: "40px",
    }),
    ...(size === "medium" && {
      width: "250px",
      height: "60px",
    }),
    ...(size === "large" && {
      width: "400px",
    }),
    ...(variant === "text" && {
      width: "unset",
    }),
    ...(fullWidth && {
      width: "100%",
      height: "60px",
    }),

    "&:hover": {
      boxShadow: "none",
    },
  })
);

export const Button = ({ variant = "contained", ...props }) => {
  return <StyledButton disableRipple variant={variant} {...props} />;
};
