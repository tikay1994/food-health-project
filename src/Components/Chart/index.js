import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "./style.css";

function ChartCalories(props) {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Calories",
        data: [2512, 1966, 2341, 2189, 2263, 2225, 2344],
        borderColor: "rgba(66, 210, 157, 0.85)",
        backgroundColor: "rgba(66, 210, 157, 0.5)",
      },
    ],
  };
  const [showChart, setShowChart] = useState(false);
  var mainChart = document.getElementById("main-chart");
  const checkShowChart = () => {
    if (!showChart && window.pageYOffset > mainChart) {
      setShowChart(true);
    } else if (showChart && window.pageYOffset <= mainChart) {
      setShowChart(false);
    }
  };
  window.addEventListener("scroll", checkShowChart);
  return (
    <div
      className="chart-calories"
      id="main-chart"
      style={{ animationName: showChart ? "animation-chart" : "none" }}
    >
      <h3>YOUR CALORIES IN THIS WEEK</h3>
      <div className="chart-detail">
        <Line
          data={chartData}
          options={{
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    </div>
  );
}

export default ChartCalories;
