import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import AddJobPage from "../pages/AddJobPage";
import EditProfilePage from "../components/EditProfilePage";
import JobsListingPage from '../pages/JobsListingPage';
import MyJobsPage from '../pages/MyJobsPage';
import EditJobPage from '../pages/EditJobPage.js';
import UpgradeToHandyManPage from "../components/UpgradeToHandyManPage";
import EditPasswordPage from "../pages/EditPasswordPage";
import EditHandyManProfilePage from "../components/EditHandyManProfilePage";

const AuthRoutes = () => {
  return (
    <Switch>
            <Route path="/" exact>
                  <div>Insert home auth page component here.</div>
            </Route>
            <Route path="/jobs" exact component={JobsListingPage} />
            <Route path="/jobs/new" exact component={AddJobPage} />
            <Route path="/jobs/:userId" exact component={MyJobsPage} />
            <Route path="/jobs/myJobs/:jobId" exact component={EditJobPage} />
            <Route path="/profile/edit" exact component={EditProfilePage} />
            <Route
              path="/profile/editHandyMan/"
              exact
              component={EditHandyManProfilePage}
            />
            <Route
              path="/profile/edit/changePassword"
              exact
              component={EditPasswordPage}
            />
            <Route
              path="/profile/upgradeToHandyMan"
              exact
              component={UpgradeToHandyManPage}
            />
            <Redirect to="/" />
    </Switch>
  );
};

export default AuthRoutes;
