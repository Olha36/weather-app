const API_KEY = "40ab8a5ddaa97704728bfab888e29c3e";

export const getCurrentWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("Не вдалося завантажити дані");
  return res.json();
};

export const getHourlyForecast = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("Не вдалося завантажити прогноз");
  return res.json();
};

export const getWeeklyForecast = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("Не вдалося завантажити тижневий прогноз");
  return res.json();
};
