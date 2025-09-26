import { useState, useEffect } from "react";
import { getHourlyForecast } from "../api/weatherApi";

export const useWeather = (cityName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(data);

  useEffect(() => {
    if (!cityName) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getHourlyForecast(cityName);

        const city = result.city.name;
        const country = result.city.country;

        const forecastData = result.list.map((item) => {
          const date = new Date(item.dt * 1000);
          return {
            city,
            country,
            date: date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            weekday: date.toLocaleDateString("en-US", {
              weekday: "long",
            }),
            time: date.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
            temp: Math.round(item.main.temp),
            temp_min: Math.round(item.main.temp_min),
            temp_max: Math.round(item.main.temp_max),
            weather: item.weather[0],
          };
        });

        setData(forecastData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cityName]);

  return { data, loading, error };
};
