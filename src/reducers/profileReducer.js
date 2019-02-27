import {
  GET_PROFILES,
  PROFILE_LOADING,
  GET_PROFILE,
  DELETE_PROFILE,
  UPDATE_PROFILE
} from "../actions/types";

const initialState = {
  profiles: [],
  profile: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: [action.payload, ...state.profiles]
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          profile => profile.login.uuid !== action.payload
        )
      };
    default:
      return state;
  }
};
