import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import configureStore from "../store";
import "./App.css";

import PrivateRoute from "./common/PrivateRoute";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/userActions";
import Loadmang from "../utils/Loadmang";

const Login = Loadmang(() => import("./auth/Login"));
const Profiles = Loadmang(() => import("./profiles/Profiles"));
const Profile = Loadmang(() => import("./profile/Profile"));
const EditProfile = Loadmang(() => import("./edit-profile/EditProfile"));

const store = configureStore();

// Check for Token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Profiles} />
              <PrivateRoute exact path="/:id" component={Profile} />
              <PrivateRoute exact path="/:id/edit" component={EditProfile} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
