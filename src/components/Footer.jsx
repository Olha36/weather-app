import { Typography, Box } from "@mui/material";
import footerLogo from "../assets/logo.png";
import instagram from "../assets/socials/instagram.svg";
import facebook from "../assets/socials/facebook.svg";
import whatsapp from "../assets/socials/whatsapp.svg";
export default function Footer() {
  return (
    <Box
      style={{
        backgroundColor: "#FFB36C",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: '50px 0'
      }}
    >
      <img src={footerLogo} alt="footer logo" />
      <Box>
        <Typography>Address</Typography>
        <Typography>
          Svobody str. 35 <br /> Kyiv <br /> Ukraine
        </Typography>
      </Box>
      <Box>
        <Typography>Contact us</Typography>
        <Box>
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={whatsapp} alt="whatsapp" />
        </Box>
      </Box>
    </Box>
  );
}
