import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DishItem from "../components/DishItem";
import SearchForm from "../components/SearchForm";
import { addNewDish } from "../redux/actions/dish";

const Search = () => {
  const [results, setResults] = useState();
  console.log(results);
  const dispatch = useDispatch();
  const handleClick = (id, dish) => {
    dispatch(addNewDish(id, dish));
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <SearchForm setResults={setResults} />
      </div>

      <div className="row rows-cols-1 row-cols-md-3 g-3 mt-5">
        {results &&
          results.map((dish) => (
            <DishItem
              key={dish.id}
              {...dish}
              addToMenu={handleClick}
              dish={dish}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
