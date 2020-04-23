import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import shotsReducer from "./shotsReducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from "./categoriesReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'shots']
}

const rootReducer = combineReducers({
  user: userReducer,
  shots: shotsReducer,
  categories: categoriesReducer
});

export default persistReducer(persistConfig, rootReducer)