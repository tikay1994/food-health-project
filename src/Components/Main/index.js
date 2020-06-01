import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
function Main(props) {
  const buttonContact = [
    {
      fill: "#1877f2",
      path:
        "M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z",
    },
    {
      fill: "#bd081c",
      path:
        "M16.023 0c-8.828 0-15.984 7.156-15.984 15.983 0 6.772 4.211 12.556 10.157 14.883-0.14-1.265-0.265-3.204 0.055-4.585 0.292-1.249 1.875-7.943 1.875-7.943s-0.479-0.96-0.479-2.375c0-2.217 1.289-3.881 2.891-3.881 1.365 0 2.024 1.025 2.024 2.251 0 1.372-0.871 3.423-1.323 5.323-0.38 1.591 0.8 2.887 2.367 2.887 2.837 0 5.024-2.993 5.024-7.316 0-3.815-2.751-6.492-6.677-6.492-4.547 0-7.212 3.416-7.212 6.932 0 1.377 0.525 2.857 1.185 3.655 0.132 0.16 0.149 0.3 0.113 0.46-0.12 0.5-0.391 1.599-0.445 1.817-0.071 0.3-0.229 0.361-0.535 0.22-1.993-0.92-3.244-3.837-3.244-6.195 0-5.035 3.664-9.669 10.56-9.669 5.544 0 9.856 3.956 9.856 9.231 0 5.513-3.476 9.949-8.311 9.949-1.619 0-3.139-0.839-3.677-1.839l-0.999 3.797c-0.359 1.393-1.339 3.136-1.997 4.195 1.497 0.46 3.075 0.713 4.733 0.713 8.809 0 15.98-7.153 15.98-15.983 0-8.831-7.171-15.983-15.98-15.983z",
    },
    {
      fill: "#1da1f2",
      path:
        "M31.939 6.092c-1.18 0.519-2.44 0.872-3.767 1.033 1.352-0.815 2.392-2.099 2.884-3.631-1.268 0.74-2.673 1.279-4.169 1.579-1.195-1.279-2.897-2.079-4.788-2.079-3.623 0-6.56 2.937-6.56 6.556 0 0.52 0.060 1.020 0.169 1.499-5.453-0.257-10.287-2.876-13.521-6.835-0.569 0.963-0.888 2.081-0.888 3.3 0 2.28 1.16 4.284 2.917 5.461-1.076-0.035-2.088-0.331-2.971-0.821v0.081c0 3.18 2.257 5.832 5.261 6.436-0.551 0.148-1.132 0.228-1.728 0.228-0.419 0-0.82-0.040-1.221-0.115 0.841 2.604 3.26 4.503 6.139 4.556-2.24 1.759-5.079 2.807-8.136 2.807-0.52 0-1.039-0.031-1.56-0.089 2.919 1.859 6.357 2.945 10.076 2.945 12.072 0 18.665-9.995 18.665-18.648 0-0.279 0-0.56-0.020-0.84 1.281-0.919 2.4-2.080 3.28-3.397z",
    },
    {
      fill: "#d14836",
      path:
        "M32 6v20c0 1.133-0.867 2-2 2h-2v-18.151l-12 8.617-12-8.617v18.151h-2c-1.135 0-2-0.867-2-2v-20c0-0.567 0.216-1.067 0.575-1.424 0.359-0.363 0.86-0.576 1.425-0.576h0.667l13.333 9.667 13.333-9.667h0.667c0.567 0 1.067 0.216 1.425 0.576 0.36 0.357 0.575 0.857 0.575 1.424z",
    },
  ];
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
      <div className="main-content__layout">
        <div className="main-content__text">
          <h2>Breakfast</h2>
          <h5>
            This is a list of notable breakfast foods, consisting of foods that
            are commonly consumed at breakfast. Breakfast is the first meal
            taken after rising from a night's sleep, most often eaten in the
            early morning before undertaking the day's work. Among English
            speakers, "breakfast" can be used to refer to this meal or to refer
            to a meal composed of traditional breakfast foods (such as eggs,
            oatmeal, and sausage) served at any time of day. Breakfast foods are
            prepared with a multitude of ingredients, including oats, wheat,
            maize, barley, noodles, starches, eggs, meats, and other foods.
          </h5>
          <a href="#">See more ...</a>
        </div>
        <div>
          <img src="https://images.wallpaperscraft.com/image/hamburger_vegetables_fast_foods_113645_3840x2160.jpg"></img>
        </div>
      </div>
      <div className="main-content__layout main-content__layout_swap">
        <div>
          <img src="https://simply-delicious-food.com/wp-content/uploads/2019/04/greek-chicken-salad-4.jpg"></img>
        </div>
        <div className="main-content__text main-content__text_swap">
          <h2>Lunch</h2>
          <h5>
            An ideal lunch looks like a grilled chicken salad with an oil-based
            dressing (500 calories), or a Mexican salad bowl with beans, salsa,
            corn and avocado (600 to 700 calories). If you’re going for a
            sandwich, skip the foot-long with mixed cold cuts, mayonnaise and
            avocado (1,500 calories) and go for a six-inch sandwich with turkey
            breast and mustard (200 to 300 calories).
          </h5>
          <a href="#">See more ...</a>
        </div>
      </div>
      <div className="main-content__layout">
        <div className="main-content__text">
          <h2>Dinner</h2>
          <h5>
            Making a list of your family's favorite dinners is a helpful tip to
            make meal planning easy! Check out my list of over 100 dinner ideas
            below to get you started. Meal planning can be a little overwhelming
            for everyone – for me too! It is not my favorite thing to do, but I
            have found a few things that make it a tad bit easier to answer that
            nagging question “What's for dinner!?!”
          </h5>
          <a href="#">See more ...</a>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        </div>
      </div>
      <div className="chart-calories">
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
      <div className="advice">
        <div className="advice_content">
          <div className="advice-title">
            <h1>Advice</h1>
          </div>
          <ul>
            <h3>Eat less sugar</h3>
            <h3>Do exercise</h3>
            <h3>Sleep early</h3>
            <h3>Don't eat after 8:00pm</h3>
            <h3>2 litter water per day</h3>
          </ul>
        </div>
      </div>
      <div className="group-video">
        <embed
          className="main-video"
          src="https://www.youtube.com/embed/28CIFOhkKrU"
        />
        <embed
          className="main-video"
          src="https://www.youtube.com/embed/580e5vP-oO0"
        />
      </div>
      <div className="btn-contact">
        {buttonContact.map((button, index) => (
          <a href="#">
            <svg className="icon-contact" viewBox="0 0 32 32">
              <path fill={button.fill} d={button.path}></path>
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Main;
