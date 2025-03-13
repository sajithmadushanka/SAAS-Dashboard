import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Electronics", "Clothing", "Groceries"],
    datasets: [
      {
        data: [300, 150, 200],
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
