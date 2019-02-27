import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jsonwebtoken from "jsonwebtoken";

import { SET_CURRENT_USER, CLEAR_ERRORS } from "./types";

// Login - Get User Token
export const loginUser = ({ username, password }) => dispatch => {
  dispatch(clearErrors());
  axios.get("https://randomuser.me/api/1.2?seed=foobar").then(async res => {
    const { login, email } = res.data.results[0];
    const user = {
      email,
      username: login.username,
      password: login.password
    };

    // This Validation comes from Backend
    if (login.username === username && login.password === password) {
      const token = await jsonwebtoken.sign(user, "secret", {
        expiresIn: 3600
      });

      // Save to localStorage
      localStorage.setItem("jwtToken", token);

      // Set Token to Auth Header
      setAuthToken(token);

      // Set Current User
      dispatch(setCurrentUser(user));
    }
  });
};

// Set Logged in User
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");

  // Remove auth header for future request
  setAuthToken(false);

  // Set the current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
