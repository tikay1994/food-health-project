import React from "react";
import PropTypes from "prop-types";
import "./style.css";
FoodList.propTypes = {
  foods: PropTypes.array,
};

FoodList.defaultProps = {
  foods: [],
};
function FoodList(props) {
  const { foods } = props;

  return (
    <div className="food-list">
      {foods.map((food) => (
        <div key={food.id}>
          {food.title}
          <a href={food.imageUrl}>
            <img className="food-product" src={food.imageUrl} alt="food" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
