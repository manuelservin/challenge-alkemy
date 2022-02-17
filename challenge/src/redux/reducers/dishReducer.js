import { types } from "../types/types";
/* como quiero que sea mi estado: 
 const initialState = {
     dish: {
         dishes: []
         cant: 0,

     }
 }

*/

const initialState = {
  dishes: [],
};
export const dishReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.dishesAdd:
      return {
        ...state,
        dishes: [action.payload, ...state.dishes],
      };
    case types.dishesDelete:
      console.log(action.payload);
      return {
        ...state,
        dishes: state.dishes.filter((dish) => dish.id !== action.payload),
      };

    default:
      return state;
  }
};
