import { useEffect, useState } from "react";
import background from "../assets/bg.png";
import Divider from "@mui/material/Divider";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "625px",
  margin: "20px auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function WeatherSearch() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekday = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const day = currentDate.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const formattedDay = `${weekday}, ${day}${suffix}`;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "595px",
        width: "100%",
        color: "white",
        paddingTop: "100px",
      }}
    >
      <h2>Weather dashboard</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          maxWidth: "613px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <p>
          Create your personal list of <br /> favorite cities and always be{" "}
          <br /> aware of the weather.
        </p>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ marginX: 2, backgroundColor: "white" }}
        />
        <div className="weather-date">
          <p>{monthYear}</p>
          <p>{formattedDay}</p>
        </div>
      </div>

      <div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
    </div>
  );
}
