import { combineReducers } from "redux";
import userReducer from "./reducers/users/reducer";
import shotsReducer from "./reducers/shots/reducer";

export default combineReducers({
  user: userReducer,
  shots: shotsReducer,
});
