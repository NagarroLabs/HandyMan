import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

import './App.css';

const App = () => {
  const { token, userId, login, logout } = useAuth();
  let routes;

  // Unauthenticated routes and then authenticated - MORE TO BE ADDED

  if (!token) {
    routes = (
      <Switch>
        <Route path='/' exact>
          <div>Insert home page component here.</div>
        </Route>
        <Route path='/jobs' exact>
          <div>Insert all jobs page component here.</div>
        </Route>
        <Route path='/auth' exact>
          <div>Insert register/login page component here.</div>
        </Route>
        <Redirect to='/auth' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/' exact>
          <div>Insert home page component here.</div>
        </Route>
        <Route path='/:userId/jobs' exact>
          <div>Insert user-created jobs component here.</div>
        </Route>
        <Route path='/jobs/new' exact>
          <div>Insert job creation page component here.</div>
        </Route>
        <Route path='/jobs/:jobId' exact>
          <div>Insert job page component here.</div>
        </Route>
        <Redirect to='/' />
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
        logout
      }}
    >
      <Router>
        <div>Insert Navbar component here.</div>
        <main>{routes}</main>
        <div>Insert Footer component here.</div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
