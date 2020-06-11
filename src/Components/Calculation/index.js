import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Button, FormGroup } from "reactstrap";
import { Formik, Form, FastField } from "formik";
import InputField from "./inputField";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCal } from "../User/CalorySlice";
Calculation.propTypes = {
  onSubmit: PropTypes.func,
};

Calculation.defaultProps = {
  onSubmit: null,
};
function Calculation(props) {
  const initialValues = {
    title: "",
    unit: "",
    count: null,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),
    unit: Yup.string().required("This field is required"),
    count: Yup.number().required("This field is required").nullable(),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit: ", values);

      setTimeout(() => {
        const action = addCal(values);
        console.log({ action });
        dispatch(action);

        history.push("/user");
        resolve(true);
      }, 2000);
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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
                <Button type="submit" color="success">
                  Result
                </Button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default Calculation;
