import React from 'react';
import {Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Saved from './SavedFiles'
//import Header from './Header'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/saved" render={(props) => <Saved />} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
