import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDishById } from "../helpers/helpers";
// import { stripHtml } from "string-strip-html";
import { useDispatch, useSelector } from "react-redux";
import { finishLoading, startLoading } from "../redux/actions/ui";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [dish, setDish] = useState();
  const { loading } = useSelector((state) => state.ui);
  // const content = dish && stripHtml(dish.summary).result;
  const content = dish && dish.summary;

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(startLoading());
    getDishById(id).then((value) => {
      dispatch(finishLoading());
      setDish(value);
    });
  }, [id]);
  console.log(dish);
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        {loading ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
          </div>
        ) : (
          <div className="col">
            {dish && (
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      src={dish.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">{dish.title}</h5>
                      <p className="card-text">{content}</p>
                      <p className="card-text">{dish.diets}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="row justify-content-center m-0  mt-5">
              <button className="btn outline-color" onClick={handleReturn}>
                Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
