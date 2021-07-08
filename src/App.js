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
        {/* <Route exact path="/cat" render={(props) => <Cat />} />

        <Route exact path="/beers" render={(props) => <AllBeer />} />
        <Route
          exact
          path="/random-beer"
          render={(props) => <RandomBeer {...props} />}
        />
        <Route exact path="/new-beer" render={(props) => <NewBeer />} />
        <Route
          exact
          path="/one-beer/:id"
          render={(props) => <SingleBeer {...props} />}
        /> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
