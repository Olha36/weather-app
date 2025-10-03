import WeatherCard from "./WeatherCard";
import WeatherSearch from "./WeatherSearch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { typography } from "../typography";
import WeatherChart from "./WeatherChart";
import { useState } from "react";

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
      </ThemeProvider>
    </>
  );
}
