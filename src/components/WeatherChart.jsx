import { Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: { title: { display: true, text: "Hour" } },
    y: { title: { display: true, text: "°C" } },
  },
};

export default function WeatherChart({ hourlyData }) {
  if (!hourlyData || !hourlyData.length) return <div>No data for chart</div>;

  const labels = hourlyData.map((item) => item.time);
  const temps = hourlyData.map((item) => item.temp);

  const chartData = {
    labels,
    datasets: [
      {
        label: `Hourly forecast for ${hourlyData[0].city}`,
        data: temps,
        borderColor: "#ffb36c",
        backgroundColor: "rgba(192, 75, 75, 0.2)",
        fill: true,
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <Typography
        variant="subtitle2"
        style={{ fontWeight: 600, marginBottom: "10px" }}
      >
        Hourly forecast for {hourlyData[0].city}
      </Typography>
      <Line options={options} data={chartData} />
    </div>
  );
}
