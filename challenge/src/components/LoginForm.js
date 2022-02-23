import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { startLogin } from "../redux/actions/auth";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{ email: "challenge@alkemy.org", password: "react" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Email invalido").required("Requerido"),
          password: Yup.string()
            .min(2, "Debe contener al menos 2 caracteres")
            .required("Requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(startLogin(values));

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form col">
            <h5 className="form-title">LoginForm</h5>
            <div className="form-content">
              <div className="form-field mb-2">
                <Field name="email" type="text" placeHolder="Email" />
                <ErrorMessage name="email" className="error" component="div" />
              </div>
              <div className="form-field mt-3">
                <Field
                  name="password"
                  type="password"
                  placeHolder="Password.."
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button
                type="submit"
                style={{ width: "100%" }}
                className=" btn orange mt-3 mb-5"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
