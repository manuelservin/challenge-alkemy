import axios from "axios";

export const getDishById = async (id) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
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

// recibo el arreglo de platos, quiero extraer la propiedad vegan si el menu tiene menos de dos platos veganos retorno un error
export const validateMenu = (dishes) => {
  if (dishes.length === 0) return;
  let vegan = [];
  for (let dish of dishes) {
    if (dish.vegan) {
      vegan.push(dish);
    }
  }
  if (dishes.length === 4 && vegan.length < 2) {
    return false;
  }
  return true;
};
