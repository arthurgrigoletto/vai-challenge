import profilesReducer from "../profileReducer";
import {
  PROFILE_LOADING,
  GET_PROFILES,
  GET_PROFILE,
  DELETE_PROFILE,
  UPDATE_PROFILE
} from "../../actions/types";

describe("Profile Reducer Test", () => {
  it("handle actions of type PROFILE_LOADING", () => {
    const action = {
      type: PROFILE_LOADING
    };

    const newState = profilesReducer([], action);

    expect(newState).toHaveProperty("loading");
    expect(newState).toEqual({ loading: true });
  });

  it("handle actions of type GET_PROFILES", () => {
    const action = {
      type: GET_PROFILES,
      payload: [{ name: "Teste", nat: "BR" }]
    };

    const newState = profilesReducer([], action);

    expect(newState).toHaveProperty("loading");
    expect(newState).toHaveProperty("profiles");
    expect(newState.profiles).toHaveLength(1);
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

    expect(newState).toHaveProperty("loading");
    expect(newState).toHaveProperty("profile");
    expect(newState.profile).toHaveProperty("name");
    expect(newState.profile).toHaveProperty("nat");
    expect(newState).toEqual({
      loading: false,
      profile: { name: "Teste", nat: "BR" }
    });
  });

  it("handle action of type UPDATE_PROFILE", () => {
    const payload = {
      name: "Teste Atualizado",
      login: {
        uuid: 1234
      }
    };

    const action = {
      type: UPDATE_PROFILE,
      payload
    };

    const initialState = {
      profiles: [
        {
          name: "Teste 1",
          login: {
            uuid: 12
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

    expect(newState.profiles).toHaveLength(3);
    expect(newState).toEqual({
      profiles: [
        {
          name: "Teste Atualizado",
          login: {
            uuid: 1234
          }
        },
        {
          name: "Teste 1",
          login: {
            uuid: 12
          }
        },
        {
          name: "Teste 2",
          login: {
            uuid: 123
          }
        }
      ]
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

    expect(newState.profiles).toHaveLength(1);
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
