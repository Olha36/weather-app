import { Box, Typography } from "@mui/material";
import { useWeekWeather } from "../hooks/useWeekWeather";

export default function WeekForecast() {
  const { data } = useWeekWeather("Kyiv");
  return (
    <Box style={{margin: '40px 0'}}>
      <Typography variant="subtitle2">6-day forecast</Typography>
      <Box
        sx={{
          backgroundColor: "#E8E8E8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "1300px",
          margin: "0 auto",
          borderRadius: "16px",
          padding: "16px",
        }}
      >
        {data.map((day, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr  1fr 1fr",
                alignItems: "center",
                backgroundColor: "#D9D9D9",
                borderRadius: "12px",
                padding: "8px 16px",
                mb: 1.5,
                columnGap: 2,
                boxSizing: "border-box",
              }}
            >
              <Typography variant="caption">
                {day.weekday}, {day.date}
              </Typography>
              {/* <img
                src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
                alt={day.weather.description}
                style={{ margin: "22px 0 15px" }}
              />
              <Typography>
                {day.temp_min}/{day.temp_max}°C
              </Typography> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
                  alt={day.weather.description}
                  style={{ margin: "22px 0 15px" }}
                />
                <Typography>
                  {day.temp_min}/{day.temp_max}°C
                </Typography>
              </Box>

              <Typography>{day.weather.description}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
