import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const NoAuthRoutes = () => {
  return (
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
};

export default NoAuthRoutes;
