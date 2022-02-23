import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
      html: ` <p> Price:  ${price} <p> 
     <p> Ready In: ${time} <p> 
     <p> Health Score:  ${healthScore} <p> 
     
     `,
      showCloseButton: true,

      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  };

  return (
    <>
      <h3>Menú</h3>
      <hr />
      <div className="row justify-content-center">
        <Link className="btn btn-outline-info" to="/search">
          Search a Dish
        </Link>
      </div>
      {dishes.length === 0 && (
        <div className="alert alert-info mt-5 ">The Menu is empty</div>
      )}

      <DishList />

      {dishes && dishes.length !== 0 && (
        <div className="alert alert-info" onClick={handleClick}>
          <p className="text-align-center">Resume</p>
        </div>
      )}
    </>
  );
};

export default Home;
