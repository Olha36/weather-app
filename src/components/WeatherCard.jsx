import {
  Divider,
  Typography,
  CircularProgress,
  Box,
  Collapse,
  Button,
} from "@mui/material";
import { useWeather } from "../hooks/useWeather";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { getHourlyForecast } from "../api/weatherApi";

const CardItem = styled("div")(() => ({
  width: "320px",
  borderRadius: "20px",
  backgroundColor: "#E4E4E4",
  padding: "15px",
}));

const CardContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "50px",
  marginTop: "60px",
}));

const CardActions = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: "10px",
}));

export default function WeatherCard() {
  const { data, setData, loading, error } = useWeather("Kyiv");
  const [loadingCard, setLoadingCard] = useState({});
  const [isFav, setIsFav] = useState({});
  const [expandedCards, setExpandedCards] = useState({});

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data.length) return null;

  const handleRefresh = async (index, city) => {
    setLoadingCard((prev) => ({ ...prev, [index]: true }));
    try {
      const result = await getHourlyForecast(city);
      const date = new Date(result.list[0].dt * 1000);
      const newDay = {
        city: result.city.name,
        country: result.city.country,
        date: date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
        time: date.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temp: Math.round(result.list[0].main.temp),
        temp_min: Math.round(result.list[0].main.temp_min),
        temp_max: Math.round(result.list[0].main.temp_max),
        feels_like: Math.round(result.list[0].main.feels_like),
        humidity: result.list[0].main.humidity,
        speed: result.list[0].wind.speed,
        gust: result.list[0].wind.gust,
        weather: result.list[0].weather[0],
      };
      setData((prevData) => {
        const updated = [...prevData];
        updated[index] = newDay;
        return updated;
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingCard((prev) => ({ ...prev, [index]: false }));
    }
  };

  const handleFavourite = (index) => {
    setIsFav((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleToggleExpand = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleDelete = async (index) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CardContainer>
      {data.map((day, index) => {
        const expanded = !!expandedCards[index];

        return (
          <CardItem key={index}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body2">{day.city}</Typography>
              <Typography variant="body2">{day.country}</Typography>
            </Box>

            <Typography variant="body1">{day.time}</Typography>

            <Box
              sx={{ display: "flex", justifyContent: "space-around", my: 1 }}
            >
              <Button
                size="small"
                variant="contained"
                sx={{ bgcolor: "#FFB36C", fontSize: "10px" }}
              >
                Hourly forecast
              </Button>
              <Button
                size="medium"
                variant="contained"
                sx={{ bgcolor: "#FFB36C", fontSize: "10px" }}
              >
                Weekly forecast
              </Button>
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", mb: 1 }}
            >
              <Typography variant="caption">{day.date}</Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: "#000000" }}
              />
              <Typography variant="caption">{day.weekday}</Typography>
            </Box>

            {loadingCard[index] ? (
              <CircularProgress sx={{ my: 3 }} />
            ) : (
              <>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
                  alt={day.weather.description}
                  style={{ margin: "22px 0 15px" }}
                />
                <Typography variant="h2">{day.temp}°C</Typography>
              </>
            )}

            <Collapse in={expanded}>
              <Box sx={{ mt: 2, p: 2, borderRadius: 2 }}>
                <Typography>Min temperature: {day.temp_min}°C</Typography>
                <Typography>Feels like: {day.feels_like}°C</Typography>
                <Typography>Humidity: {day.humidity}</Typography>
                <Typography>Wind speed: {day.speed}</Typography>
                <Typography>Wind gust: {day.gust}</Typography>
              </Box>
            </Collapse>

            <CardActions>
              <RefreshIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleRefresh(index, day.city)}
              />
              {isFav[index] ? (
                <FavoriteIcon
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => handleFavourite(index)}
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleFavourite(index)}
                />
              )}
              <Button
                size="medium"
                variant="contained"
                sx={{ bgcolor: "#FFB36C", fontSize: "10px" }}
                onClick={() => handleToggleExpand(index)}
              >
                {expanded ? "see less" : "see more"}
              </Button>
              <DeleteOutlineOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(index)}
              />
            </CardActions>
          </CardItem>
        );
      })}
    </CardContainer>
  );
}
