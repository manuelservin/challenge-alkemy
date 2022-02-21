import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDishById } from "../helpers/helpers";

const Detail = () => {
  const { id } = useParams();
  const [dish, setDish] = useState();
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };
  useEffect(() => {
    getDishById(id).then((value) => setDish(value));
  }, [id]);
  console.log(dish);
  return (
    <div className="row">
      <div className="col col-xxl">
        {dish && (
          <div className="card">
            <img src={dish.image} className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">klklkl</h5>
              <p className="card-text">DishTypes:</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        )}
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default Detail;
