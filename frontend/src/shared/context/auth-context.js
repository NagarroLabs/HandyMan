import { createContext } from 'react';

// These will be available app-wide (check out App.js)

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
});
