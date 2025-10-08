import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import WarningAmberRounded from "@mui/icons-material/WarningAmberRounded";

const StyledFormLabel = styled(FormLabel)(({ message, theme }) => ({
  fontSize: "13px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  marginTop: "8px",
  opacity: message ? 1 : 0,
  [theme.breakpoints.down("md")]: {
    marginTop: "4px",
  },
}));

export const FormErrorMessage = ({ message }) => {
  return (
    <StyledFormLabel message={message} error data-testid="form-error-message">
      <WarningAmberRounded fontSize="small" data-testid="form-error-icon" />
      <Typography variant="caption">{message}</Typography>
    </StyledFormLabel>
  );
};
