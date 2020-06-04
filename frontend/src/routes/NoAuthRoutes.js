import React from "react";
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/LoginPage";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const NoAuthRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>Insert home page component here.</div>
      </Route>
      <Route path="/jobs" exact>
        <div>Insert all jobs page component here.</div>
      </Route>
      <Route path="/signup" exact component={RegisterPage} />
      <Route path="/login" exact component={LoginPage} />
      <Redirect to="/signup" />
    </Switch>
  );
};

export default NoAuthRoutes;
