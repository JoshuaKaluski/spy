import {LOGIN_SUCCESS, LOGIN_FAILURE} from "../actions/types";

export default function (state, action) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
}