import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  user: userReducer,
  errors: errorReducer,
  profile: profileReducer
});

export default rootReducer;
