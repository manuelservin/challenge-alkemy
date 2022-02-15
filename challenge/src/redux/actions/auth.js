import axios from "axios";
import Swal from "sweetalert2";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLogin = (data) => {
  return async (dispatch) => {
    dispatch(startLoading());
    axios
      .post("http://challenge-react.alkemy.org/", data)
      .then((response) => {
        const { token } = response.data;

        dispatch(login(token));
        localStorage.setItem("token", JSON.stringify(token));
        dispatch(finishLoading());
      })
      .catch(() => {
        dispatch(finishLoading());
        Swal.fire("Error!", "Please provide valid email and password", "error");
      });
  };
};

export const login = (token) => ({
  type: types.login,
  payload: {
    //estos vienen de la respuesta de firebase user credentials
    token,
  },
});
