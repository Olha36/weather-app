import WeatherCard from "./WeatherCard";
import WeatherSearch from "./WeatherSearch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { typography } from "../typography";

const theme = createTheme({
  typography,
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <WeatherSearch />
        <WeatherCard />
      </ThemeProvider>
    </>
  );
}
