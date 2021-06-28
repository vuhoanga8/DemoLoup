import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../Pages/Home';
import Recipes from '../Pages/Recipes';

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route path="/recipes">
            <Recipes />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
