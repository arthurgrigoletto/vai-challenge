import profilesReducer from "../profileReducer";
import {
  PROFILE_LOADING,
  GET_PROFILES,
  GET_PROFILE,
  DELETE_PROFILE
} from "../../actions/types";

describe("Profile Reducer Test", () => {
  it("handle actions of type PROFILE_LOADING", () => {
    const action = {
      type: PROFILE_LOADING
    };

    const newState = profilesReducer([], action);

    expect(newState).toEqual({ loading: true });
  });

  it("handle actions of type GET_PROFILES", () => {
    const action = {
      type: GET_PROFILES,
      payload: [{ name: "Teste", nat: "BR" }]
    };

    const newState = profilesReducer([], action);

    expect(newState).toEqual({
      loading: false,
      profiles: [{ name: "Teste", nat: "BR" }]
    });
  });

  it("handle action of type GET_PROFILE", () => {
    const action = {
      type: GET_PROFILE,
      payload: { name: "Teste", nat: "BR" }
    };

    const newState = profilesReducer([], action);

    expect(newState).toEqual({
      loading: false,
      profile: { name: "Teste", nat: "BR" }
    });
  });

  it("handle action of type DELETE_PROFILE", () => {
    const action = {
      type: DELETE_PROFILE,
      payload: 123
    };

    const initialState = {
      profiles: [
        {
          name: "Teste 1",
          login: {
            uuid: 1234
          }
        },
        {
          name: "Teste 2",
          login: {
            uuid: 123
          }
        }
      ]
    };

    const newState = profilesReducer(initialState, action);

    expect(newState).toEqual({
      profiles: [
        {
          name: "Teste 1",
          login: {
            uuid: 1234
          }
        }
      ]
    });
  });

  it("handle action with unknow type", () => {
    const newState = profilesReducer([], { type: "shausahiusah" });

    expect(newState).toEqual([]);
  });
});
