import React from 'react';
import axios from 'axios';
import {LOGIN_SUCCESS, LOGIN_FAILURE} from "./types";

export const signIn = async () => {
  let action;
  try {
    const res = await axios.get('/auth/google');
    console.log(res);
    action = {type: LOGIN_SUCCESS, payload: res.data};
    console.log(action);
    return action;
  } catch (e) {
    console.log(e.message);
    action = {type: LOGIN_FAILURE};
    console.log(action);
    return action
  }
};

