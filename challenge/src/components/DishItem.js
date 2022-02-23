import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDish } from "../redux/actions/dish";

import { DollarCircle } from "@styled-icons/boxicons-regular/DollarCircle";
import { Bowl } from "@styled-icons/entypo/Bowl";
import { Timer } from "@styled-icons/fluentui-system-regular/Timer";

import { HealthBook } from "@styled-icons/remix-fill/HealthBook";

const DishItem = ({
  id,
  title,
  image,
  healthScore,
  readyInMinutes,
  servings,
  vegan,
  pricePerServing,
  vegetarian,
  glutenFree,
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
            
          </p> */}
          <p className="recipe-tags">
            {vegan && <span class="recipe-tag">Vegan</span>}
            {vegetarian && <span class="recipe-tag">Vegetarian</span>}
            {glutenFree && <span class="recipe-tag">Gluten free</span>}
          </p>

          <h1 class="recipe-title">{title}</h1>
          <div className="info my-4">
            <span className="info-text">
              <HealthBook className="icon" height={25} />
              {healthScore}
            </span>

            <span className="info-text">
              <Timer className="icon" height={25} />
              {readyInMinutes}
            </span>
            <span className="info-text">
              <Bowl className="icon" height={25} />
              {servings}
            </span>
            <span className="info-text">
              <DollarCircle className="icon" height={25} />
              {pricePerServing}
            </span>
            {/* {vegan ? "Vegan" : "Not Vegan"} */}
          </div>

          <div className="row justify-content-center align-items-end ">
            {dish ? (
              <Link to={`/search/${dish.id}`} className="btn  mx-2 orange">
                See More
              </Link>
            ) : (
              <Link to={`/search/${id}`} className="btn  mx-2 orange">
                See More
              </Link>
            )}

            {addToMenu ? (
              <button
                onClick={() => addToMenu(id, dish)}
                className="btn  mx-2 outline-color "
              >
                add
              </button>
            ) : (
              <button onClick={handleDelete} className="btn  mx-2 ">
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
