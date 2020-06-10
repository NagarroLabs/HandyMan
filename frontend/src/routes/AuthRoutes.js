import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import EditProfilePage from "../components/EditProfilePage";

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div>Insert home page component here.authenticated</div>
      </Route>
      <Route path="/profile" exact component={EditProfilePage} />
      <Route path="/jobs" exact>
        <div>Insert all jobs page component here.</div>
      </Route>
      <Route path="/jobs/new" exact>
        <div>Insert job creation page component here.</div>
      </Route>
      <Route path="/jobs/:jobId" exact>
        <div>Insert job page component here.</div>
      </Route>
      <Route path="/:userId/jobs" exact>
        <div>Insert user-created jobs component here.</div>
      </Route>
      {/* <Redirect to="/" /> */}
    </Switch>
  );
};

export default AuthRoutes;
