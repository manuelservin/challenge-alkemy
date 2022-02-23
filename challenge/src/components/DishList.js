import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DishItem from "./DishItem";

const DishList = () => {
  const { dishes } = useSelector((state) => state.dishes);

  return (
    <div className=" my-5 row row-cols-1 ">
      {dishes &&
        dishes.map((dish) => (
          <div className="big">
            <DishItem key={dish.id} {...dish} />
          </div>
        ))}
    </div>
  );
};

export default DishList;
