import { Divider } from "@mui/material";
import { useWeather } from "../hooks/useWeather";
import Button from "@mui/material/Button";

export default function WeatherCard() {
  const { data, loading, error } = useWeather("Kyiv");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data.length) return null;

  return (
    <div className="card-container">
      {data.map((day, index) => (
        <div className="card-container__card" key={index}>
          <div className="card-container__location" style={{ display: "flex" }}>
            <p>{day.city}</p>
            <p>{day.country}</p>
          </div>

          <p>{day.time}</p>
          <div className="forecast-buttons">
            <Button
              size="medium"
              variant="contained"
              style={{
                backgroundColor: "#FFB36C",
                color: "#000000",
                marginRight: "10px",
              }}
            >
              Hourly forecast
            </Button>
            <Button
              size="medium"
              variant="contained"
              style={{ backgroundColor: "#FFB36C", color: "#000000" }}
            >
              Weekly forecast
            </Button>
          </div>

          <div className="card-container__card-location">
            <p>{day.date}</p>
            <Divider />
            <p>{day.weekday}</p>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
            alt={day.weather.description}
          />

          <div>{day.temp} °C</div>
        </div>
      ))}
    </div>
  );
}
