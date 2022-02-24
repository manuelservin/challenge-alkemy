import axios from "axios";
import Swal from "sweetalert2";
import { config } from "../config/config";

export const getDishById = async (id) => {
  const response = await axios.get(
    `${config.baseUrl}/recipes/${id}/information?includeNutrition=false&apiKey=${config.apiKey}`
  );

  return response.data;
};

//en teoria, quiero que reciba un array
export const getTotal = (array, value) => {
  if (value === 0) return;

  let total = array.map((v) => v[value]).reduce((a, b) => a + b, 0);
  return total.toFixed(2);
};
export const getAverage = (array, value) => {
  console.log(array);
  console.log(value);
  if (value === "") return;
  let total =
    array.map((v) => v[value]).reduce((prev, curr) => (curr += prev)) /
    array.length;
  console.log(total);
  return total.toFixed();
};

export const searchDish = async (values) => {
  console.log(values);
  const { dish, vegan } = values;
  if (vegan) {
    const response = await axios
      .get(
        `${config.baseUrl}/recipes/complexSearch?query=${dish}&addRecipeInformation=true&diet=vegan&apiKey=${config.apiKey}`
      )
      .then((res) => {
        return res.data.results;
      })
      .catch((err) => Swal.fire("Error!", err, "error"));
    return response;
  }
  const response = await axios
    .get(
      `${config.baseUrl}/recipes/complexSearch?query=${dish}&addRecipeInformation=true&apiKey=${config.apiKey}`
    )
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => Swal.fire("Error!", err, "error"));

  return response;
};
