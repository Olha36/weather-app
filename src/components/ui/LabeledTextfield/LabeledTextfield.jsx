"use client";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { FormErrorMessage } from "../../FormErrorMessage/FormErrorMessage";
import { StyledInput, StyledInputLabel } from "./LabeledTextField.styles";

export const LabeledTextfield = ({
  label,
  error,
  errorMessage,
  id,
  required,
  ...props
}) => {
  const isError = error || !!errorMessage;

  return (
    <FormControl fullWidth error={isError}>
      {label && (
        <Box>
          <StyledInputLabel htmlFor={id} required={required} shrink>
            {label}
          </StyledInputLabel>
        </Box>
      )}
      <StyledInput id={id} error={isError} disableUnderline {...props} />
      <FormErrorMessage message={errorMessage} />
    </FormControl>
  );
};
