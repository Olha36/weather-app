// import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Collapse, Card, CardContent } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 3,
};

export default function WeatherModal({ day, open, handleClose }) {
  const [expanded] = useState(false);
  return (
    <Collapse in={expanded} open={open} handleClose={handleClose}>
      <Box sx={style}>
        <Typography variant="subtitle1">
          Min temperature: {day.temp_min}°C //{" "}
        </Typography>

        <Typography variant="subtitle1">
          Feels like: {day.feels_like}°C //{" "}
        </Typography>
        <Typography variant="subtitle1">Humidity: {day.humidity}</Typography>
        <Typography variant="subtitle1">Wind speed: {day.speed}</Typography>
        <Typography variant="subtitle1">Wind gust: {day.gust}</Typography>
      </Box>
    </Collapse>
    // <Modal
    //   aria-labelledby="transition-modal-title"
    //   aria-describedby="transition-modal-description"
    //   open={open}
    //   onClose={handleClose}
    //   closeAfterTransition
    //   slots={{ backdrop: Backdrop }}
    //   slotProps={{ backdrop: { timeout: 500 } }}
    //   disableAutoFocus
    //   disableEnforceFocus
    //   disableRestoreFocus
    //   container={document.body}
    // >
    //   <Fade in={open}>
    //     <Box sx={style}>
    //       <Typography variant="subtitle1">
    //         Min temperature: {day.temp_min}°C
    //       </Typography>
    //       <Typography variant="subtitle1">
    //         Feels like: {day.feels_like}°C
    //       </Typography>
    //       <Typography variant="subtitle1">Humidity: {day.humidity}</Typography>
    //       <Typography variant="subtitle1">Wind speed: {day.speed}</Typography>
    //       <Typography variant="subtitle1">Wind gust: {day.gust}</Typography>
    //     </Box>
    //   </Fade>
    // </Modal>
  );
}
