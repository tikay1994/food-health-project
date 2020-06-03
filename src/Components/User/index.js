import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import TodoApp from "../Todoapp";
function User(props) {
  const chartData1 = {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        borderColor: "rgba(54, 136, 252, 0.85)",
        backgroundColor: "rgba(0,0,0,0)",
      },
    ],
  };
  const chartData2 = {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
        borderColor: "rgba(66, 210, 157, 0.85)",
        backgroundColor: "rgba(0,0,0,0)",
      },
    ],
  };
  const chartData3 = {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
        borderColor: "rgba(54, 136, 252, 0.85)",
        backgroundColor: "rgba(0,0,0,0)",
      },
    ],
  };
  const chartData4 = {
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [45, 47, 41, 14, 63, 25, 13, 12, 22, 19, 24],
        borderColor: "rgba(66, 210, 157, 0.85)",
        backgroundColor: "rgba(0,0,0,0)",
      },
    ],
  };
  const chartData5 = {
    labels: ["Open"],
    datasets: [
      {
        label: "",
        data: [45, 55],
        backgroundColor: ["rgba(66, 210, 157, 0.85)", "rgba(0, 0, 0, 0.1)"],
      },
    ],
  };
  const chartData6 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Pipeline",
        data: [17, 30, 21, 34, 18, 40, 29, 17, 18, 29, 16, 29],
        borderColor: "rgba(54, 136, 252, 0.85)",
        backgroundColor: "rgba(0,0,0,0)",
      },
      {
        label: "Total Revenue",
        data: [12, 25, 16, 29, 13, 35, 24, 12, 13, 24, 11, 24],
        borderColor: "rgba(66, 210, 157, 0.85)",
        backgroundColor: "rgba(66, 210, 157, 0.4)",
      },
    ],
  };
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
  const iconMenuLeft = [
    {
      img:
        "M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z",
    },
    {
      img:
        "M16 0c-8.825 0-16 7.175-16 16s7.175 16 16 16 16-7.175 16-16-7.175-16-16-16zM16 29.863c-1.431 0-2.806-0.219-4.106-0.619 0.563-0.919 1.412-2.431 1.725-3.631 0.169-0.65 0.863-3.294 0.863-3.294 0.45 0.863 1.775 1.594 3.175 1.594 4.181 0 7.194-3.844 7.194-8.625 0-4.581-3.738-8.006-8.544-8.006-5.981 0-9.156 4.019-9.156 8.387 0 2.031 1.081 4.563 2.813 5.369 0.262 0.125 0.4 0.069 0.463-0.188 0.044-0.194 0.281-1.131 0.387-1.575 0.031-0.137 0.019-0.262-0.094-0.4-0.575-0.694-1.031-1.975-1.031-3.162 0-3.056 2.313-6.019 6.256-6.019 3.406 0 5.788 2.319 5.788 5.637 0 3.75-1.894 6.35-4.356 6.35-1.363 0-2.381-1.125-2.050-2.506 0.394-1.65 1.15-3.425 1.15-4.613 0-1.063-0.569-1.95-1.756-1.95-1.394 0-2.506 1.438-2.506 3.369 0 1.225 0.412 2.056 0.412 2.056s-1.375 5.806-1.625 6.887c-0.281 1.2-0.169 2.881-0.050 3.975-5.156-2.012-8.813-7.025-8.813-12.9 0-7.656 6.206-13.863 13.862-13.863s13.863 6.206 13.863 13.863c0 7.656-6.206 13.863-13.863 13.863z",
    },
    {
      img:
        "M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z",
    },
  ];

  const listMenuLeft = [
    {
      name: "Gardening",
      listChildren: [
        { name: "Planting Zone Map" },
        { name: "Frost Dates" },
        { name: "Planting Calendar" },
        { name: "Plant Growing Guides" },
      ],
    },
    {
      name: "Homestead",
      listChildren: [],
    },
    {
      name: "Money",
      listChildren: [],
    },
    {
      name: "Home Ideas",
      listChildren: [],
    },
    {
      name: "DIY",
      listChildren: [],
    },
    {
      name: "Raising Chickens",
      listChildren: [],
    },
    {
      name: "Food and Drinks",
      listChildren: [],
    },
    {
      name: "Product",
      listChildren: [],
    },
    {
      name: "Write for Us",
      listChildren: [],
    },
    {
      name: "About Us",
      listChildren: [],
    },
  ];
  return (
    <div className="user-container">
      <div className="user-menu relative bg-white">
        <div className="absolute right-0">
          <svg className="m-2" width="24px" height="24px" viewBox="0 0 24 24">
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
          </svg>
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="Search this website..."
            className="m-3"
          ></input>
        </div>
        <div className="user-menu-icon text-center">
          {iconMenuLeft.map((icon, index) => (
            <svg width="24px" height="24px" viewBox="0 0 32 32">
              <path d={icon.img}></path>
            </svg>
          ))}
        </div>
        {listMenuLeft.map((menu, index) => (
          <ul key={index} className="group hover:text-teal-500 mt-1 p-3">
            {menu.name}
            <div className="block bg-white">
              {menu.listChildren.map((list, index) => (
                <li
                  key={index}
                  className="hidden group-hover text-black  hover:text-teal-500 p-3"
                >
                  {list.name}
                </li>
              ))}
            </div>
          </ul>
        ))}
      </div>
      <div></div>
      <div className="user-main-content">
        <div>
          <div className="user-btn-calories">
            <Link to="/cal">
              <button className="user-btn-calories__link">Calculation</button>
            </Link>
          </div>
        </div>
        <div className="total-chart">
          <div className="component-chart-item">
            <div className="chart-item-detail">
              <div>Protein</div>
              <div>9,814</div>
              <div>
                <svg width="12px" height="12px" viewBox="0 0 20 20">
                  <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
                </svg>
                <span>6.12%</span>
              </div>
            </div>
            <div>
              <Line
                width="150px"
                data={chartData1}
                options={{
                  layout: {
                    padding: {
                      left: -70,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="component-chart-item">
            <div className="chart-item-detail">
              <div>Fat</div>
              <div>3,792</div>
              <div>
                <svg width="12px" height="12px" viewBox="0 0 20 20">
                  <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
                </svg>
                <span>5.23%</span>
              </div>
            </div>
            <div>
              <Line
                width="150px"
                data={chartData2}
                options={{
                  layout: {
                    padding: {
                      left: -70,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="component-chart-item">
            <div className="chart-item-detail">
              <div>Carbohydrat</div>
              <div>414</div>
              <div>
                <svg width="12px" height="12px" viewBox="0 0 20 20">
                  <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
                </svg>
                <span>10.57%</span>
              </div>
            </div>
            <div>
              <Line
                width="150px"
                data={chartData3}
                options={{
                  layout: {
                    padding: {
                      left: -70,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="component-chart-item">
            <div className="chart-item-detail">
              <div>Vitamin</div>
              <div>235</div>
              <div>
                <svg width="12px" height="12px" viewBox="0 0 20 20">
                  <path d="M7 10v8h6v-8h5l-8-8-8 8h5z"></path>
                </svg>
                <span>13.86%</span>
              </div>
            </div>
            <div>
              <Line
                width="150px"
                data={chartData4}
                options={{
                  layout: {
                    padding: {
                      left: -70,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="main-chart">
            <div className="main-chart-item">
              CAMPAIGNS
              <Doughnut data={chartData5} />
              <div className="main-chart-item-left">
                <div>
                  <svg width="24px" height="24px" viewBox="0 0 32 32">
                    <path d="M16.818 21.991l-1.697 0.009h3.378l0.020-0.018-0.099 0.001 6.579-5.883v-8.091c0-0.557-0.455-1.009-1-1.009h-15c-0.552 0-1 0.444-1 1.002v8.198l6.551 5.78 2.267 0.011zM13.091 6l3.409-3 3.409 3h4.093c1.107 0 1.997 0.895 1.997 2v3.36l3 2.64v14.006c0 1.1-0.897 1.994-2.004 1.994h-20.993c-1.114 0-2.004-0.893-2.004-1.994v-14.006l3-2.64v-3.36c0-1.112 0.894-2 1.997-2h4.093zM18.428 6l-1.928-1.7-1.928 1.7h3.856zM26 12.677v2.656l1.5-1.333-1.5-1.323zM7 15.333v-2.656l-1.5 1.323 1.5 1.333zM13.5 23l-7 6h20l-7-6h-6zM27.685 28.725v0 0c0.194-0.183 0.315-0.442 0.315-0.725v-13l-8 7.017 7.685 6.708zM5.315 28.725l7.685-6.708-8-7.017v13c0 0.283 0.121 0.542 0.315 0.725v0 0z"></path>
                    >
                  </svg>
                </div>
                <div>1,976</div>
                <div>Open</div>
              </div>
            </div>

            <div className="main-chart-item">
              REVENUE
              <div className="main-chart-right-value">
                <div>
                  <p>Current Month</p>
                  <p>$42,025</p>
                </div>
                <div>
                  <p>Previous Month</p>
                  <p>$74,651</p>
                </div>
              </div>
              <Line
                data={chartData6}
                options={{
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="main-chart-calories">
            <Bar
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
        <div className="user-activitives">
          <div className="user-foods">
            <div className="user-food-detail">
              TOP FOOD
              <div>
                <table>
                  <tr>
                    <th>Food</th>
                    <th>Time</th>
                    <th>Vol</th>
                  </tr>
                  <tr>
                    <td>Bread</td>
                    <td>6:00 AM</td>
                    <td>300g</td>
                  </tr>
                  <tr>
                    <td>Meat</td>
                    <td>11:00 AM</td>
                    <td>200g</td>
                  </tr>
                  <tr>
                    <td>Milk Tea</td>
                    <td>14:15 PM</td>
                    <td>200ml</td>
                  </tr>
                  <tr>
                    <td>Pizza</td>
                    <td>19:00 PM</td>
                    <td>1 piece</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="user-foods user-share">
            <div>SHARE</div>
            <div className="user-share-activitives">
              <div className="user-share-state">
                <img
                  src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                  style={{
                    borderRadius: "50%",
                  }}
                  width="36px"
                  height="36px"
                ></img>
                <div>Risa Pearson</div>
              </div>
              <Button color="primary">Cool</Button>
            </div>
            <div className="user-share-activitives">
              <div className="user-share-state">
                <img
                  src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                  style={{
                    borderRadius: "50%",
                  }}
                  width="36px"
                  height="36px"
                ></img>
                <div>Risa Pearson</div>
              </div>
              <Button color="primary">Cool</Button>
            </div>
            <div className="user-share-activitives">
              <div className="user-share-state">
                <img
                  src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                  style={{
                    borderRadius: "50%",
                  }}
                  width="36px"
                  height="36px"
                ></img>
                <div>Risa Pearson</div>
              </div>
              <Button color="primary">Cool</Button>
            </div>
            <div className="user-share-activitives">
              <div className="user-share-state">
                <img
                  src="https://thuthuatnhanh.com/wp-content/uploads/2019/06/tai-hinh-chibi-bst.jpg"
                  style={{
                    borderRadius: "50%",
                  }}
                  width="36px"
                  height="36px"
                ></img>
                <div>Risa Pearson</div>
              </div>
              <Button color="primary">Cool</Button>
            </div>
          </div>
        </div>
        <div>
          <h2>What are you doing today?</h2>
          <TodoApp />
        </div>
      </div>
    </div>
  );
}

export default User;
