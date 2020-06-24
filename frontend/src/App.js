import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AuthRoutes from "./routes/AuthRoutes";
import NoAuthRoutes from "./routes/NoAuthRoutes";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import CustomNavbar from "./components/CustomNavbar";
import { connect } from "react-redux";
import { setLoggedIn } from "./actions";

import "./index.css";

const App = (props) => {
  const { token, userId, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLogged: props.loggedIn,
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

        <main>{props.isLoggedIn ? <AuthRoutes /> : <NoAuthRoutes />}</main>
      </Router>
    </AuthContext.Provider>
  );
};

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, { setLoggedIn })(App);
