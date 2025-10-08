"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "48px",
  width: "100%",
  padding: "0",

  [theme.breakpoints.down("sm")]: {
    padding: "0 24px",
  },
}));

const StyledContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "400px",
});

export const AuthContainer = ({ title, children, footer }) => (
  <StyledContainer>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" >
        {title}
      </Typography>
    </Box>
    <StyledContent>
      {children}
      {footer}
    </StyledContent>
  </StyledContainer>
);
