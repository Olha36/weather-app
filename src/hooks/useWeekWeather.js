import { useState, useEffect } from "react";
import { getWeeklyForecast } from "../api/weatherApi";

export const useWeekWeather = (cityName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cityName) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getWeeklyForecast(cityName);

        const city = result.city.name;
        const country = result.city.country;

        const groupedByDate = result.list.reduce((acc, item) => {
          const date = new Date(item.dt * 1000);
          const dateStr = date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          if (!acc[dateStr]) acc[dateStr] = [];
          acc[dateStr].push(item);
          return acc;
        }, {});

        const forecastData = Object.entries(groupedByDate).map(
          ([date, items]) => {
            const weekday = new Date(items[0].dt * 1000).toLocaleDateString(
              "en-US",
              {
                weekday: "long",
              }
            );

            const temp_min = Math.min(...items.map((i) => i.main.temp_min));
            const temp_max = Math.max(...items.map((i) => i.main.temp_max));

            const weather = items[0].weather[0];

            return {
              city,
              country,
              date,
              weekday,
              temp_min: Math.round(temp_min),
              temp_max: Math.round(temp_max),
              weather: {
                main: weather.main,
                description: weather.description,
                icon: weather.icon,
              },
            };
          }
        );

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
