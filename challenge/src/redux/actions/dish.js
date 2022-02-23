import { types } from "../types/types";
import Swal from "sweetalert2";
export const addNewDish = (id, dish) => ({
  type: types.dishesAdd,
  payload: {
    id,
    ...dish,
  },
});

export const loadDishes = (dishes) => ({ type: types.load, payload: dishes });

export const deleteDish = (id) => ({
  type: types.dishesDelete,
  payload: id,
});

export const validateDish = (id, dish) => {
  return (dispatch, getState) => {
    const { dishes } = getState().dishes;
    if (dishes.length === 4) {
      Swal.fire("Oops!", "Menu is already full", "warning");
      return;
    }
    if (dish.vegan) {
      const vegan = dishes.filter((item) => item.vegan === true);
      vegan.length < 2
        ? dispatch(addNewDish(id, dish))
        : Swal.fire(
            "Oops!",
            "The maximum number of vegan dishes is 2",
            "warning"
          );
    }

    if (!dish.vegan) {
      const notVegan = dishes.filter((item) => item.vegan === false);
      notVegan.length < 2
        ? dispatch(addNewDish(id, dish))
        : Swal.fire(
            "Oops!",
            "The maximum number of no vegan dishes is 2",
            "warning"
          );
    }
  };
};
