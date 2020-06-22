import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import AddJobPage from '../pages/AddJobPage';
import JobsListingPage from '../pages/JobsListingPage';
import EditJobPage from '../pages/EditJobsPage';

const AuthRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <div>Insert home auth page component here.</div>
            </Route>
            <Route path="/jobs" exact component={JobsListingPage} />
            <Route path="/jobs/new" exact component={AddJobPage} />
            <Route path="/jobs/:userId" exact component={EditJobPage} />
            <Route path="/jobs/:jobId" exact>
                <div>Insert job page component here.</div>
            </Route>

            <Redirect to="/" />
        </Switch>
    );
};

export default AuthRoutes;
