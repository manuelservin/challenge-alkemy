import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginAsGuest, startLogin } from "../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const handleLoginAsGuest = () => {
    dispatch(loginAsGuest());
  };
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
          <>
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="visually-hidden"></span>
              </div>
            ) : (
              <div className="form">
                <Form className="col">
                  <h5 className="form-title">Login</h5>
                  <div className="form-content">
                    <div className="form-field mb-2">
                      <Field name="email" type="text" placeHolder="Email" />
                      <ErrorMessage
                        name="email"
                        className="error"
                        component="div"
                      />
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
                      style={{ width: "70%" }}
                      className=" btn orange mt-4 mb-3"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
                <div className="row justify-content-center">
                  <button
                    onClick={handleLoginAsGuest}
                    style={{ width: "60%" }}
                    className=" btn outline-color mb-5"
                  >
                    Enter as a guest
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
