import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DishItem from "../components/DishItem";
import SearchForm from "../components/SearchForm";
import { addNewDish } from "../redux/actions/dish";

const Search = () => {
  const { lastSearch } = useSelector((state) => state.search);
  const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();
  const handleClick = (id, dish) => {
    dispatch(addNewDish(id, dish));
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <SearchForm />
      </div>
      {loading ? (
        <div className="row justify-content-center">
          <h3 className="text-align-center">Loading....</h3>
        </div>
      ) : (
        <div className="row rows-cols-1 row-cols-md-3 g-3 mt-5">
          {lastSearch &&
            lastSearch.map((dish) => (
              <DishItem
                key={dish.id}
                {...dish}
                addToMenu={handleClick}
                dish={dish}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
