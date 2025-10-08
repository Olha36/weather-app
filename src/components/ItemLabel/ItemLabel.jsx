import Typography from "@mui/material/Typography";

export const ItemLabel = ({ label, title, valueColor, labelColor }) => {
  return (
    <Typography
      variant="subtitle2"
      sx={{ color: (theme) => labelColor ?? theme.palette.grey[600] }}
    >
      {label}
      <Typography
        component="span"
        variant="subtitle1"
        sx={{ color: (theme) => valueColor ?? theme.palette.secondary.main }}
      >
        {title}
      </Typography>
    </Typography>
  );
};
