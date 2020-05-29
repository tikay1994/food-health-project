import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
function Main(props) {
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
  return (
    <div>
      <div className="btn-calories">
        <button className="btn-calories__link">Your calories today!</button>
      </div>
      <div className="main-content__layout">
        <div>
          <h2>Food of you today</h2>
          <h3>Breakfast</h3>
          <p></p>
          <h3>Lunch</h3>
          <p></p>
          <h3>Dinner</h3>
          <p></p>
        </div>
        <div>
          <img src="https://images.wallpaperscraft.com/image/hamburger_vegetables_fast_foods_113645_3840x2160.jpg"></img>
        </div>
      </div>
      <div className="main-content__layout">
        <div>
          <img src="https://images.wallpaperscraft.com/image/meat_vegetables_dishes_82035_1920x1080.jpg"></img>
        </div>
        <div>
          <h2>Food of you today</h2>
          <h3>Breakfast</h3>
          <p></p>
          <h3>Lunch</h3>
          <p></p>
          <h3>Dinner</h3>
          <p></p>
        </div>
      </div>
      <div className="chart-calories">
        <h3>YOUR CALORIES IN THIS WEEK</h3>
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
      <div className="advice">
        <div className="advice-title">
          <h1>Advice</h1>
        </div>
        <ul>
          <li>Eat less sugar</li>
          <li>Do exercise</li>
          <li>Sleep early</li>
          <li>Don't eat after 8:00pm</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
