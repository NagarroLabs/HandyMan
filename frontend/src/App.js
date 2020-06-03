import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthRoutes from "./routes/AuthRoutes";
import NoAuthRoutes from "./routes/NoAuthRoutes";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

import "./index.css";

const App = () => {
  const { token, userId, login, logout } = useAuth();
  let routes;
  if (!token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <div>Insert home page component here.</div>
        </Route>
        <Route path="/jobs" exact>
          <div>Insert all jobs page component here.</div>
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <div>Insert home page component here.</div>
        </Route>
        <Route path="/:userId/jobs" exact>
          <div>Insert user-created jobs component here.</div>
        </Route>
        <Route path="/jobs/new" exact>
          <div>Insert job creation page component here.</div>
        </Route>
        <Route path="/jobs/:jobId" exact>
          <div>Insert job page component here.</div>
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        userId,
        login,
        logout,
      }}
    >
      <Router>
        {/* <main>{routes}</main> */}
        <LoginPage />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
