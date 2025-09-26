import { Divider, Typography } from "@mui/material";
import { useWeather } from "../hooks/useWeather";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const CardItem = styled("div")(() => ({
  width: "320px",
  height: "430px",
  borderRadius: "20px",
  backgroundColor: "#E4E4E4",
}));

const CardContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "50px",
  marginTop: "60px",
}));

const CardActions = styled("div")(() => ({
      display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '10px'
}))

export default function WeatherCard() {
  const { data, loading, error } = useWeather("Kyiv");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data.length) return null;

  return (
    <CardContainer className="card-container">
      {data.map((day, index) => (
        <CardItem className="card-container__card" key={index}>
          <div
            className="card-container__location"
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "15px 0",
            }}
          >
            <Typography variant="body2">{day.city}</Typography>
            <Typography variant="body2">{day.country}</Typography>
          </div>

          <Typography variant="body1">{day.time}</Typography>
          <div
            className="forecast-buttons"
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "10px 0 15px",
            }}
          >
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "#FFB36C",
                color: "#000000",
                fontSize: "10px",
              }}
            >
              Hourly forecast
            </Button>
            <Button
              size="medium"
              variant="contained"
              style={{
                backgroundColor: "#FFB36C",
                color: "#000000",
                fontSize: "10px",
              }}
            >
              Weekly forecast
            </Button>
          </div>

          <div
            className="card-container__card-location"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Typography variant="caption">{day.date}</Typography>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "#000000" }}
            />
            <Typography variant="caption">{day.weekday}</Typography>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
            alt={day.weather.description}
            style={{ margin: "22px 0 15px" }}
          />

          <Typography variant="h2">{day.temp}°C</Typography>

          <CardActions className="card-actions">
            <RefreshIcon />
            <FavoriteBorderOutlinedIcon />
            <Button
              size="medium"
              variant="contained"
              style={{
                backgroundColor: "#FFB36C",
                color: "#000000",
                fontSize: "10px",
              }}
            >
              See more
            </Button>
            <DeleteOutlineOutlinedIcon />
          </CardActions>
        </CardItem>
      ))}
    </CardContainer>
  );
}
