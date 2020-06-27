import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import JobsListingPage from '../pages/JobsListingPage';
import ViewDetailsAboutJobPage from '../pages/ViewDetailsAboutJobPage';

const NoAuthRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <div>Insert home no auth page component here.</div>
            </Route>
            <Route
                path="/job/:jobId"
                exact
                component={ViewDetailsAboutJobPage}
            />
            <Route path="/signup" exact component={RegisterPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/jobs" exact component={JobsListingPage} />
            <Redirect to="/signup" />
        </Switch>
    );
};

export default NoAuthRoutes;
