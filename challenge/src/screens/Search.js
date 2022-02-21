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
    <>
      <div className="row justify-content-center">
        <SearchForm />
      </div>
      {loading ? (
        <div className="row justify-content-center">
          <h3 className="text-align-center">Loading....</h3>
        </div>
      ) : (
        <div className="my-5 row  list justify-content-center">
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
