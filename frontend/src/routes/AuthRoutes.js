import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import AddJobPage from "../pages/AddJobPage";
import EditProfilePage from "../components/EditProfilePage";
import UpgradeToHandyManPage from "../components/UpgradeToHandyManPage";
import EditPasswordPage from "../pages/EditPasswordPage";
import EditHandyManProfilePage from "../components/EditHandyManProfilePage";

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>Insert home auth page component here.</div>
      </Route>
      <Route path="/jobs" exact>
        <div>Insert all jobs auth page component here.</div>
      </Route>
      <Route path="/jobs/new" exact component={AddJobPage} />
      <Route path="/jobs/:jobId" exact>
        <div>Insert job page component here.</div>
      </Route>
      <Route path="/:userId/jobs" exact>
        <div>Insert user-created jobs component here.</div>
      </Route>
      <Route path="/profile/edit" exact component={EditProfilePage} />
      <Route
        path="/profile/editHandyMan"
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
