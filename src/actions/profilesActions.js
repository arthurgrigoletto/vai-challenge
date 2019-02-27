import axios from "axios";
import {
  PROFILE_LOADING,
  GET_PROFILES,
  DELETE_PROFILE,
  UPDATE_PROFILE
} from "./types";

// Set loading state
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const getProfiles = (nat = "br", results = "10") => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(
      `https://randomuser.me/api/1.2?seed=foobar&results=${results}&nat=${nat}`
    )
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data.results
      })
    )
    .catch(() =>
      dispatch({
        type: GET_PROFILES,
        payload: null
      })
    );
};

// Update Profile
export const updateProfile = (id, fields, history) => dispatch => {
  dispatch(deleteProfile(id));
  const payload = {
    id,
    ...fields
  };

  dispatch({
    type: UPDATE_PROFILE,
    payload
  });

  history.push("/");
};
// Delete Profile
export const deleteProfile = id => dispatch => {
  dispatch({
    type: DELETE_PROFILE,
    payload: id
  });
};
