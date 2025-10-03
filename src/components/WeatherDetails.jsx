import { Typography, Box, Collapse } from "@mui/material";
import temperature from "../assets/temperature/temperature.png";
import humidity from "../assets/temperature/humidity.png";
import pressure from "../assets/temperature/pressure.png";
import windSpeed from "../assets/temperature/wind-speed.png";
import visibility from "../assets/temperature/visibility.png";
import { styled } from "@mui/material/styles";

const CardDetail = styled("div")(() => ({
  backgroundColor: "#D9D9D9",
  width: "290px",
  height: "auto",
  padding: "20px 0",
}));

const Image = styled("img")(() => ({
  marginTop: "23px",
}));
export default function WeatherDetails({ expanded, day }) {
  if (!day) return null;
  return (
    <Collapse in={expanded}>
      <Box
        sx={{
          mt: 2,
          p: 12,
          borderRadius: 2,
          backgroundColor: "#E8E8E8",
          maxWidth: "1140px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 7,
          flexWrap: "wrap",
        }}
      >
        <CardDetail>
          <Typography variant="subtitle2">Feels like </Typography>
          <Typography variant="h2">{day.feels_like}°C</Typography>
          <Image src={temperature} alt="temperature"></Image>
        </CardDetail>
        <CardDetail>
          <Typography variant="subtitle2">Min °C</Typography>
          <Typography variant="h2">{day.temp_min}°C</Typography>
          <Typography variant="subtitle2" style={{ marginTop: "23px" }}>
            Max °C
          </Typography>
          <Typography variant="h2">{day.temp_max}°C</Typography>
        </CardDetail>

        <CardDetail>
          <Typography variant="subtitle2">Humidity</Typography>
          <Typography variant="h2">{day.humidity}</Typography>
          <Image src={humidity} alt="humidity"></Image>
        </CardDetail>

        <CardDetail>
          <Typography variant="subtitle2">Pressure </Typography>
          <Typography variant="h2">{day.pressure} Pa</Typography>
          <Image src={pressure} alt="pressure"></Image>
        </CardDetail>

        <CardDetail>
          <Typography variant="subtitle2">Wind speed </Typography>
          <Typography variant="h2"> {day.speed}</Typography>
          <Image src={windSpeed} alt="wind speed"></Image>
        </CardDetail>

        <CardDetail>
          <Typography variant="subtitle2">Visibility</Typography>
          <Typography variant="h2">{day.visibility}</Typography>
          <Image src={visibility} alt="visibility"></Image>
        </CardDetail>
      </Box>
    </Collapse>
  );
}
