import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DishItem from "../components/DishItem";
import SearchForm from "../components/SearchForm";

import { validateDish } from "../redux/actions/dish";

const Search = () => {
  const { lastSearch } = useSelector((state) => state.search);
  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();
  const handleClick = (id, dish) => {
    dispatch(validateDish(id, dish));
  };

  return (
    <>
      <div className="row justify-content-center">
        <SearchForm />
      </div>

      {loading ? (
        <div
          style={{ width: "100%", height: "100%" }}
          className="row justify-content-center mt-5"
        >
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="my-5 row  list ">
          {lastSearch &&
            lastSearch.map((dish) => (
              <div className="small ">
                <DishItem
                  key={dish.id}
                  {...dish}
                  addToMenu={handleClick}
                  dish={dish}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Search;
