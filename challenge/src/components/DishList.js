import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DishItem from "./DishItem";

const DishList = () => {
  const { dishes } = useSelector((state) => state.dishes);
  console.log(dishes);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {dishes && dishes.map((dish) => <DishItem key={dish.id} {...dish} />)}
    </div>
  );
};

export default DishList;
