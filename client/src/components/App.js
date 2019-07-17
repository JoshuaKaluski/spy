import React from 'react';
import {Route, Switch} from 'react-router-dom';


import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Game from './Game';


const App = () => {

  return (
    <div className='container'>
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