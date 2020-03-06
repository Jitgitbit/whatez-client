import { LOGIN_SUCCES } from "../../actions/users/actions";
import { SIGNUP_SUCCES } from "../../actions/users/actions";

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
    default:
      return state;
  }
};
