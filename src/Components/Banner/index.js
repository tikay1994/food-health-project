import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Banner(props) {
  return (
    <div>
      <section className="banner component-transition">
        <div className="black-background"></div>
        <div>
          <h2 className="banner__title">FOOD IS VERY IMPORTANT TO LIFE</h2>
        </div>
        <div className="btn-calories">
          <Link to="/cal">
            <button className="btn-calories__link">Your calories today!</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Banner;
