import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Swal from "sweetalert2";
import { searchDish } from "../helpers/helpers";
import { useDispatch } from "react-redux";
import { searchUpdate } from "../redux/actions/search";
import { finishLoading, startLoading } from "../redux/actions/ui";

const SearchForm = ({}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h5>search Form</h5>
      <Formik
        initialValues={{ dish: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.dish) {
            errors.dish = "Required";
          } else if (values.dish.trim().length < 2) {
            errors.dish = "Enter a valid dish";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const { dish } = values;
          dispatch(startLoading());
          searchDish(dish)
            .then((res) => {
              dispatch(searchUpdate(res));
              dispatch(finishLoading());
            })
            .catch((err) => Swal.fire("Error!", err, "error"));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="dish" type="text" />
            <ErrorMessage name="dish" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
