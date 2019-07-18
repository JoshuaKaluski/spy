import React from 'react';
import {Route, Switch} from 'react-router-dom';


import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Game from './Game';
import Create from './Create'


const App = () => {

  return (
    <div className='container'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/game' component={Game}/>
        <Route exact path='/game/create' component={Create}/>
      </Switch>
    </div>
  )
};

export default App;