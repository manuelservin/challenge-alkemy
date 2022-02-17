import { types } from "../types/types";

export const addNewDish = (id, dish) => ({
  type: types.dishesAdd,
  payload: {
    id,
    ...dish,
  },
});

export const startloadDishes = () => {
  return (dispatch) => {};
};

export const loadDishes = (dishes) => ({ type: types.load, payload: dishes });

export const deleteDish = (id) => ({
  type: types.dishesDelete,
  payload: id,
});
