import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import shotsReducer from "./shotsReducer";

export default combineReducers({
  user: userReducer,
  shots: shotsReducer,
});
