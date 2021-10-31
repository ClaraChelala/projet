import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import More from "./Components/more";
import Topics from "./Components/topics";
import Favorites from "./Components/favorites";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/topics" component={Topics}>
            <Topics />
          </Route>
          <Route path="/favorites" component={Favorites}>
            <Favorites />
          </Route>
          <Route path="/more" component={More}>
            <More/>
          </Route>
          <Route exact path="/">
            <Redirect to="/topics" />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
