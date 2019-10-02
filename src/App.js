import React from 'react';
import './App.css';
import Bar from './components/Bar';
import Bubble from './components/Bubble';
import Doughnut from './components/Doughnut';
import Line from './components/Line';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavagationBar from './components/NavagationBar';

function App() {
  return (
    <React.Fragment>
    <NavagationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/line" component={Line} />
          <Route path="/bar" render={(props) => {
            console.log(props)
            return (<Bar />)
          }
          } />
          <Route path="/bubble" component={Bubble} />
          <Route path="/doughnut" component={Doughnut} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
