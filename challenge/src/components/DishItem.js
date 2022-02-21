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
    // console.log(id);
    dispatch(deleteDish(id));
  };
  return (
    <>
      <article class="recipe ">
        <div class="pizza-box">
          <img src={image} alt={title} />
        </div>
        <div class="recipe-content">
          <p class="recipe-tags">
            <span class="recipe-tag">Gluten Free</span>
            <span class="recipe-tag">Main dish</span>
          </p>

          <h1 class="recipe-title">{title}</h1>

          <p class="recipe-desc">
            It really is possible to make excellent gluten free pizza at home in
            your own oven with our recipes and techniques.
          </p>
          <p className="card-text">
            HealthScore: {healthScore}
            Ready in: {readyInMinutes} minutes servings: {servings}
            {vegan ? "Vegan" : "Not Vegan"}
          </p>
          <div className="row justify-content-center">
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
