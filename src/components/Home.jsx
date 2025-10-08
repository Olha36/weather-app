import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { typography } from "../typography";
import Nature from "./Nature";
import News from "./News";
import WeatherCard from "./WeatherCard";
import WeatherChart from "./WeatherChart";
import WeatherSearch from "./WeatherSearch";
import WeekForecast from "./WeekForecast";

const theme = createTheme({
  typography,
});

export default function Home() {
  const [selectedCityData, setSelectedCityData] = useState(null);
  return (
    <>
      <ThemeProvider theme={theme}>
        <WeatherSearch />
        <WeatherCard
          onCardChange={(cityData) => setSelectedCityData(cityData)}
        />
        {selectedCityData && <WeatherChart hourlyData={selectedCityData} />}
        <WeekForecast />
        <News />
        <Nature />
      </ThemeProvider>
    </>
  );
}
