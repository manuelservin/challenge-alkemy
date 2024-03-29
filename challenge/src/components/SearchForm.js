import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { searchDish } from "../helpers/helpers";
import { useDispatch } from "react-redux";
import { searchUpdate } from "../redux/actions/search";
import { finishLoading, startLoading } from "../redux/actions/ui";

const SearchForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ dish: "", vegan: false }}
        validationSchema={Yup.object({
          dish: Yup.string()
            .min(3, "it should have at least 2 characters")
            .required("it should have at least 2 characters"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(startLoading());
          searchDish(values)
            .then((res) => {
              console.log(res);
              if (res.length === 0) {
                dispatch(finishLoading());
                return Swal.fire("Error!", "The dish does not exist", "error");
              }

              dispatch(searchUpdate(res));
              dispatch(finishLoading());
            })
            .catch((err) => Swal.fire("Error!", err, "error"));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="  search-form ">
            <div className="input-group">
              <Field
                name="dish"
                type="text"
                placeholder="Enter a dish.."
                className="form-control"
              />
              <div className="input-group-append">
                <button
                  className="btn orange"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <label className="checkBox">
              <Field name="vegan" type="checkbox" />
              Vegan
            </label>
            <ErrorMessage className="error" name="dish" component="div" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SearchForm;
