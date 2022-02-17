import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DishItem from "./DishItem";

const DishList = () => {
  const { dishes } = useSelector((state) => state.dishes);
  console.log(dishes);
  return (
    <div className="container">
      <div className="row">
        {dishes && dishes.map((dish) => <DishItem key={dish.id} {...dish} />)}
      </div>
    </div>
  );
};

export default DishList;
