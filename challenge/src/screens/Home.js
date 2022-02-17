import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DishList from "../components/DishList";
import { getAverage, getTotal } from "../helpers/helpers";

const Home = () => {
  const { dishes } = useSelector((state) => state.dishes);
  console.log(dishes.length);

  const [price, setPrice] = useState(0);
  const [healthScore, setHealthScore] = useState(0);
  const [time, setTime] = useState(0);

  let priceArr = dishes.map((dish) => dish.pricePerServing);
  let healthScoreArr = dishes.map((dish) => dish.healthScore);
  let timeArr = dishes.map((dish) => dish.readyInMinutes);

  useEffect(() => {
    setPrice(getTotal(priceArr));
    if (dishes.length > 0) {
      setTime(getAverage(timeArr));
      setHealthScore(getAverage(healthScoreArr));
    }
  }, [dishes, priceArr, healthScoreArr, timeArr]);

  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
      <Link to="/search">Search</Link>
      <h3>Menú</h3>
      <hr />
      <DishList />
      <span>total price: ${price}</span>
      <span> ready in: {time} minutes</span>
      <span> healthScore: {healthScore}</span>
    </div>
  );
};

export default Home;
