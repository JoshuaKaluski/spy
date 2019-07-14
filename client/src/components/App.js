import React, {useContext} from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Login from './Login'

const Game = () => <h2>Game</h2>

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/game' component={Game}/>
      </Switch>
    </div>
  )
};

export default App;