import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import DishList from "../components/DishList";
import { getAverage, getTotal } from "../helpers/helpers";
import { logout } from "../redux/actions/auth";
import { resetDishes } from "../redux/actions/dish";

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
  const dispatch = useDispatch();
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
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(resetDishes());
  };

  return (
    <div className="container">
      <h1>Menu</h1>
      <hr />
      <div className="row justify-content-center">
        <Link className="btn btn-lg outline-color mt-4" to="/search">
          Search a Dish
        </Link>
        <button onClick={handleLogout}>LogOut</button>
      </div>
      {dishes.length === 0 && (
        <div className="alert alert-info mt-5 ">The Menu is empty</div>
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
