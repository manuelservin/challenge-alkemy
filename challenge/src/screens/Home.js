import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DishList from "../components/DishList";
import { getAverage, getTotal, validateMenu } from "../helpers/helpers";

const Home = () => {
  const { dishes } = useSelector((state) => state.dishes);
  console.log(dishes.length);

  const [price, setPrice] = useState(0);
  const [healthScore, setHealthScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setPrice(getTotal(dishes, "pricePerServing"));
    if (dishes.length > 0) {
      setTime(getAverage(dishes, "readyInMinutes"));
      setHealthScore(getAverage(dishes, "healthScore"));
      setIsValid(validateMenu(dishes));
    }
  }, [dishes]);

  return (
    <>
      <h3>Menú</h3>
      <hr />
      <div className="row justify-content-center">
        <Link className="btn btn-outline-info" to="/search">
          Search a Dish
        </Link>
      </div>

      {!isValid && <span>Debe haber por lo menos dos platos veganos </span>}
      {dishes.length === 0 && (
        <div className="alert alert-info mt-5 text-align-center">
          The Menu is empty
        </div>
      )}

      <DishList />

      {dishes && dishes.length !== 0 && (
        <div>
          <span>total price: ${price}</span>
          <span> ready in: {time} minutes</span>
          <span> healthScore: {healthScore}</span>
        </div>
      )}
    </>
  );
};

export default Home;
