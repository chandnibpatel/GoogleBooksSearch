import React from 'react';
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { Route, Redirect, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
        <Nav />
        <Switch>
            <Route path="/search" component={Search} />
            <Route path="/saved" component={Saved} />
            <Redirect from="/" exact to="/search" />
        </Switch>
    </div>
    </Router>
  );
}

export default App;