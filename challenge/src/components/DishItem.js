import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDish } from "../redux/actions/dish";

const DishItem = ({
  id,
  title,
  image,
  healthScore,
  readyInMinutes,
  servings,
  vegan,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // console.log(id);
    dispatch(deleteDish(id));
  };
  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            HealthScore: {healthScore}
            Ready in: {readyInMinutes} minutes servings: {servings}
            {vegan ? "Vegan" : "Not Vegan"}
          </p>
          <Link to={`/search/${id}`} className="btn btn-primary">
            See More
          </Link>
          <button onClick={handleDelete} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
