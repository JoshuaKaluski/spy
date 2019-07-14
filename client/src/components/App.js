import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './Header';

const Game = () => <h2>Game</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/game' component={Game}/>
      </Switch>
    </div>
  )
};

export default App;