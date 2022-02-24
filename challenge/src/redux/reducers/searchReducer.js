import { types } from "../types/types";

const initialState = {
  lastSearch: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.searchUpdate:
      return {
        lastSearch: action.payload,
      };
    case types.searchReset:
      return initialState;

    default:
      return state;
  }
};
