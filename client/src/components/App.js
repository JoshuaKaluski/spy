import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

const Game = () => <h2>Game</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/game' component={Game}/>
        </Switch>
      </div>
    )
  }
}

export default App;