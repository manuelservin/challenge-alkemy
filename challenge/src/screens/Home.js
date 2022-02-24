import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DishList from "../components/DishList";
import { getAverage, getTotal } from "../helpers/helpers";

const Home = () => {
  const { dishes } = useSelector((state) => state.dishes);

  const [price, setPrice] = useState(0);
  const [healthScore, setHealthScore] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setPrice(getTotal(dishes, "pricePerServing"));
    if (dishes.length > 0) {
      setTime(getAverage(dishes, "readyInMinutes"));
      setHealthScore(getAverage(dishes, "healthScore"));
    }
  }, [dishes]);

  const handleClick = () => {
    console.log("open");
    Swal.fire({
      title: "<strong> Resume:</strong>",
      icon: "info",
      html: ` <p> <b>Price</b>:  ${price} <p> 
     <p> <b>Ready In
     </b>: ${time} minutes<p> 
     <p> <b>Health Score</b>:  ${healthScore} <p> 
     
     `,
      showCloseButton: true,

      focusConfirm: false,
    });
  };

  return (
    <div className="container">
      {dishes.length === 0 && (
        <div className="row  full mt-5  empty">
          <h2> Your menu is empty</h2>
          <h3>Meet our options </h3>
          <Link to="/search" className="btn orange">
            Explore dishes...
          </Link>
        </div>
      )}

      <DishList />

      {dishes && dishes.length !== 0 && (
        <div className="row justify-content-center mb-5 full ">
          <button className="btn orange " onClick={handleClick}>
            Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
