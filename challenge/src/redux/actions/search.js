import { types } from "../types/types";

export const searchUpdate = (dishes) => {
  return {
    type: types.searchUpdate,
    payload: dishes,
  };
};

export const resetSearch = () => ({
  type: types.searchReset,
});
