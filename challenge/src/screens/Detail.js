import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDishById } from "../helpers/helpers";

const Detail = () => {
  const { id } = useParams();
  const [dish, setDish] = useState();
  useEffect(() => {
    setDish(getDishById(id));
  }, [id]);
  console.log(dish);
  return (
    <div className="row">
      <div className="col col-xxl">
        {dish && (
          <div className="card">
            <img src="hjhjk.jpg" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">klklkl</h5>
              <p className="card-text">DishTypes:</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
