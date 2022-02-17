import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const SearchForm = ({ setResults }) => {
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
          axios
            .get(
              `https://api.spoonacular.com/recipes/complexSearch?query=${dish}&addRecipeInformation=true&apiKey=${process.env.REACT_APP_API_KEY}`
            )
            .then((res) => setResults(res.data.results))
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
