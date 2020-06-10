import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AuthRoutes from "./routes/AuthRoutes";
import NoAuthRoutes from "./routes/NoAuthRoutes";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import CustomNavbar from "./components/CustomNavbar";

import "./index.css";

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
        {console.log(!!token)}
        <main>{!!routes ? <AuthRoutes /> : <NoAuthRoutes />}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
