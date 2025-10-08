import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...theme.typography.caption,
  fontWeight: 500,
  marginBottom: '8px',
  transform: 'none',
  position: 'static',

  '& .MuiInputLabel-asterisk': {
    color: theme.palette.error.main,
  },
  '&.Mui-focused': {
    color: theme.palette.text.secondary,
  },
  '&.Mui-error': {
    color: theme.palette.text.secondary,
  },
}));

export const StyledInput = styled(Input, {
  shouldForwardProp: (propName) => propName !== 'error',
})(({ theme, error, size = 'medium' }) => ({
  border: '1px solid',
  borderRadius: '8px',
  color: theme.palette.text.secondary,
  ...theme.typography.caption,
  borderColor: error ? theme.palette.error.main : theme.palette.text.secondary,
  fontWeight: 500,

  '& .MuiInputBase-input': {
    padding: 0,
  },

  ...(size === 'small' && {
    padding: '8px 12px',
  }),

  ...(size === 'medium' && {
    padding: '12px 16px',
  }),
}));
