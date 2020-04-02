import { LOGIN_SUCCES } from "../actions/usersActions";
import { SIGNUP_SUCCES } from "../actions/usersActions";

const initialState = {
  //   users: [],
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCES:
      return { ...state, user: { ...payload } };
    case SIGNUP_SUCCES:
      console.log("is user reducer called?", payload);
      return { ...state, user: { ...payload } };
    case 'SIGNOUT_SUCCESS':
      console.log(`================>> SIGNOUT SUCCESS`)
      return state;
    default:
      return state;
  }
};
