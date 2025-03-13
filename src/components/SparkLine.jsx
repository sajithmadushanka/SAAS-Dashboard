import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

const SparkLineChart = () => {
  const data = {
    labels: ["", "", "", "", "", ""], // Empty labels for Sparkline effect
    datasets: [
      {
        data: [10, 30, 20, 40, 35, 50], // Your data points
        borderColor: "#4CAF50", // Line color
        borderWidth: 2,
        pointRadius: 0, // Hide points
        fill: false, // No fill under line
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false }, // Hide X-axis
      y: { display: false }, // Hide Y-axis
    },
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: { enabled: false }, // Disable tooltip (optional)
    },
  };

  return (
    <div style={{ width: "100px", height: "30px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default SparkLineChart;
