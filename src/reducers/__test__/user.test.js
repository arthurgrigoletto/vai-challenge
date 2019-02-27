import usersReducer from "../userReducer";
import { SET_CURRENT_USER } from "../../actions/types";

describe("User Reducer Test", () => {
  it("handles actions of type SET_CURRENT_USER", () => {
    const action = {
      type: SET_CURRENT_USER,
      payload: { name: "Teste", email: "teste@teste.com", id: 1 }
    };

    const newState = usersReducer([], action);

    expect(newState).toEqual({
      isAuthenticated: true,
      user: { name: "Teste", email: "teste@teste.com", id: 1 }
    });
  });

  it("handles actions of unknow type", () => {
    const newState = usersReducer([], { type: "sahiusahiusa" });

    expect(newState).toEqual([]);
  });
});
