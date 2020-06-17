import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import ExampleUsage from "./ExampleUsage";

import AuthRoutes from "./routes/AuthRoutes";
import NoAuthRoutes from "./routes/NoAuthRoutes";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import CustomNavbar from "./components/CustomNavbar";

import "./index.css";
import EditProfilePage from "./components/EditProfilePage";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import RegisterPage from "./components/RegisterPage";
import JobsListingPage from "./pages/JobsListingPage";
import UpgradeToHandyManPage from "./components/UpgradeToHandyManPage";

const App = () => {
  const { token, userId, login, logout } = useAuth();
  let routes = !!token ? <AuthRoutes /> : <NoAuthRoutes />;

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
        <div>
          <CustomNavbar />
        </div>
        {console.log(token)}
        {/* <main>{token ? <AuthRoutes /> : <NoAuthRoutes />}</main> */}

        {/* <Route path="/" exact>
          <div>Insert home page component here.</div>
        </Route>
        <PrivateRoute path="/profile" component={EditProfilePage} />
        <Route path="/signup" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/jobs" exact component={JobsListingPage} /> */}
        <UpgradeToHandyManPage />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
