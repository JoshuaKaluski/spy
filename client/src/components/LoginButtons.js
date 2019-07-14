import React, {useContext} from 'react';
import {Store} from "../Store";

import GoogleSignInButton from './GoogleSignInButton';
import {signIn as googleSignIn} from '../actions/googleAuth';

const LoginButtons = () => {
  const {state, dispatch} = useContext(Store);
  console.log(state);
  return (
    <div>
      <GoogleSignInButton/>
    </div>
  )
};

export default LoginButtons;