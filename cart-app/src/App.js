import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from './Cart'
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
