import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CustomNavbar from './components/CustomNavbar';
import AuthRoutes from './routes/AuthRoutes';
import NoAuthRoutes from './routes/NoAuthRoutes';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {
  const { token, userId, login, logout } = useAuth();

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
        <main>{token ? <AuthRoutes /> : <NoAuthRoutes />}</main>
        <div>Insert Footer component here.</div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
