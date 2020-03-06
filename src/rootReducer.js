import { combineReducers } from "redux";
import userReducer from "./reducers/users/reducer";


export default combineReducers({
  user: userReducer
});
