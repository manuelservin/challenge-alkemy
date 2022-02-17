import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
    <div className="row">
      <SearchForm setResults={setResults} />

      <div>
        <h4>resultados</h4>
        <hr />
        {results &&
          results.map((dish) => (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(dish.id, dish)}
            >
              <img
                src={dish.image}
                alt={dish.title}
                style={{ height: "80px" }}
              />
              <span key={dish.id}> {dish.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
