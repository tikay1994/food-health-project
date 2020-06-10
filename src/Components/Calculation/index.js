import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Button, FormGroup } from "reactstrap";
import { Formik, Form, FastField } from "formik";
import InputField from "./inputField";

Calculation.propTypes = {
  onSubmit: PropTypes.func,
};

Calculation.defaultProps = {
  onSubmit: null,
};
function Calculation(props) {
  const initialValues = {
    title: "",
  };
  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <div className="calculate-contain">
            <div className="calculate-component">
              <Form>
                <FastField
                  name="title"
                  component={InputField}
                  label="Which food did you eat?"
                  placeholder="Enter your food"
                />
                <FastField
                  name="unit"
                  component={InputField}
                  label="Unit"
                  placeholder="g, kg, piece, pound, ..."
                />
                <FastField
                  name="count"
                  component={InputField}
                  label="Count"
                  placeholder="1, 2, 3, ..."
                />
                {/* <div className="calculate-contain">
              <div className="calculate-component">
                <div className="input-cal">
                  <p>Which food did you eat?</p>
                  <input placeholder="Enter your food"></input>
                </div>
                <div className="input-cal">
                  <p>Unit</p>
                  <input placeholder="g, kg, piece, pound, ..."></input>
                </div>
                <div className="input-cal">
                  <p>Count</p>
                  <input placeholder="1, 2, 3, ..."></input>
                </div>
                <Button className="input-cal" color="success">
                  Result
                </Button>
              </div>
            </div> */}
                <FormGroup>
                  <Button type="submit" color="success">
                    Result
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default Calculation;
