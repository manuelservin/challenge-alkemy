import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { startLogin } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h5>KoginForm</h5>
      <Formik
        initialValues={{ email: "challenge@alkemy.org", password: "react" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(startLogin(values));

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="div" />
            <Field name="password" type="password" />

            <ErrorMessage name="password" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
