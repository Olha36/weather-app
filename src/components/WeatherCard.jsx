import { Divider, Typography, CircularProgress } from "@mui/material";
import { useWeather } from "../hooks/useWeather";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { getHourlyForecast } from "../api/weatherApi";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

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
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginTop: "10px",
}));

export default function WeatherCard() {
  const { data, setData, loading, error } = useWeather("Kyiv");
  const [loadingCard, setLoadingCard] = useState({});
  const [isFav, setIsFav] = useState({});

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
     setIsFav((prev) => ({
       ...prev,
       [index]: !prev[index], 
     }));
  };
  const handleMoreInfo = () => console.log("more info");
  const handleDelete = () => console.log("delete");

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

          {loadingCard[index] ? (
            <div style={{ margin: "30px 0" }}>
              <CircularProgress />
            </div>
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

          <CardActions className="card-actions">
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
              style={{
                backgroundColor: "#FFB36C",
                color: "#000000",
                fontSize: "10px",
              }}
              onClick={handleMoreInfo}
            >
              See more
            </Button>
            <DeleteOutlineOutlinedIcon
              style={{ cursor: "pointer" }}
              onClick={handleDelete}
            />
          </CardActions>
        </CardItem>
      ))}
    </CardContainer>
  );
}
