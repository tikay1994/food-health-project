import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Button } from "reactstrap";
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
        <div className="food-product" key={food.id}>
          <div className="food">
            <img src={food.imageUrl} alt={food.title} />

            <div className="food__overlay">
              <h3 className="food__title">{food.title}</h3>

              <div className="food__actions">
                <div>
                  <Button outline size="sm" color="danger">
                    Order
                  </Button>
                </div>

                <div>
                  <Button outline size="sm" color="light">
                    Information
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodList;
