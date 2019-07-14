import React, {useReducer} from 'react';

import googleReducer from './reducers/googleAuth.reducer';

const initialState = {
  isAuthenticated: null,
  user: null
};

export const Store = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(googleReducer, initialState);

  const value = {state, dispatch};

  return <Store.Provider value={value}>{props.children}
  </Store.Provider>
}