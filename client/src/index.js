import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './components/App';
import {StoreProvider} from "./Store";

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StoreProvider>,
  document.querySelector('#root')
);