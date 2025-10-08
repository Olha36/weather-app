import { Box, Typography } from "@mui/material";
import footerLogo from "../../assets/logo.png";
import facebook from "../../assets/socials/facebook.svg";
import instagram from "../../assets/socials/instagram.svg";
import whatsapp from "../../assets/socials/whatsapp.svg";
import { styled } from "@mui/material/styles";
import {Link} from "@mui/material";

const Image = styled("img")(() => ({
  cursor: "pointer",
}));
export default function Footer() {
  return (
    <Box
      style={{
        backgroundColor: "#FFB36C",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "50px 0",
        marginTop: "20px",
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
          <Link
            target="_blank"
            href="https://www.instagram.com/o_l_h_a_maria/?locale=en"
            active="true"
          >
            <Image src={instagram} alt="instagram" />
          </Link>

          <Link
            target="_blank"
            href="https://www.facebook.com/olhakucheruk"
            active="true"
          >
            <Image src={facebook} alt="facebook" />
          </Link>

          <Link target="_blank" href="https://wa.me/+380976089680" active="true">
            <Image src={whatsapp} alt="whatsapp" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
