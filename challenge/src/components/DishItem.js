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

  addToMenu,
  dish,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteDish(id));
  };
  return (
    <>
      <article class="recipe ">
        <div class="pizza-box">
          <img src={image} alt={title} />
        </div>
        <div class="recipe-content">
          {/* <p class="recipe-tags">
            {diets &&
              diets.map((dish) => <span class="recipe-tag">{dish}</span>)}
          </p> */}

          <h1 class="recipe-title">{title}</h1>

          <p className="card-text mt-4">
            HealthScore: {healthScore}
            Ready in: {readyInMinutes} minutes servings: {servings}
            {vegan ? "Vegan" : "Not Vegan"}
          </p>
          <div className="row justify-content-center align-items-end ">
            {dish ? (
              <Link to={`/search/${dish.id}`} className="btn btn-primary mx-2">
                See More
              </Link>
            ) : (
              <Link to={`/search/${id}`} className="btn btn-primary mx-2">
                See More
              </Link>
            )}

            {addToMenu ? (
              <button
                onClick={() => addToMenu(id, dish)}
                className="btn btn-primary mx-2"
              >
                add
              </button>
            ) : (
              <button onClick={handleDelete} className="btn btn-primary mx-2">
                Delete
              </button>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default DishItem;
