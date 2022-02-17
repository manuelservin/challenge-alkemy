import axios from "axios";

export const getDishById = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
  );
  return response.data;
};

//en teoria, quiero que reciba un array
export const getTotal = (array) => {
  let total = array.reduce((a, b) => a + b, 0);
  return total.toFixed(2);
};
export const getAverage = (array) => {
  console.log(array);
  let total = array.reduce((prev, curr) => (curr += prev)) / array.length;
  console.log(total);
  return total.toFixed();
};
