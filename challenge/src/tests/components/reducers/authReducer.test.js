import { authReducer } from "../../../redux/reducers/authReducer";
import { types } from "../../../redux/types/types";

describe("Tests in authReducer", () => {
  test("it should return the login", () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        token: "dfdsfdfs",
      },
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({ token: "dfdsfdfs" });
  });
  test("it should return the logout", () => {
    const initState = {
      token: "dfdsfdfs",
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initState, action);
    expect(state).toEqual({});
  });
});
