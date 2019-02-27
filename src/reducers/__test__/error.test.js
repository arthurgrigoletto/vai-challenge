import errorsReducer from "../errorReducer";
import { GET_ERRORS, CLEAR_ERRORS } from "../../actions/types";

describe("Error Reducer Test", () => {
  it("handles actions of type GET_ERRORS", () => {
    const action = {
      type: GET_ERRORS,
      payload: { msg: "Test Errors" }
    };

    const newState = errorsReducer([], action);

    expect(newState).toEqual({ msg: "Test Errors" });
  });

  it("handles actions of type CLEAR_ERRORS", () => {
    const action = {
      type: CLEAR_ERRORS
    };

    const initialState = {
      msg: "Test Errors"
    };

    const newState = errorsReducer(initialState, action);
    expect(newState).toEqual({});
  });

  it("handles actions of unknow type", () => {
    const newState = errorsReducer([], { type: "sahiusahiusa" });

    expect(newState).toEqual([]);
  });
});
