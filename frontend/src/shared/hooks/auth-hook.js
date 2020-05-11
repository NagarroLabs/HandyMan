import { useState, useCallback, useEffect } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  // Persisting userId and token in the browser's localStorage

  const login = useCallback((uid, _token) => {
    setToken(_token);
    setUserId(uid);
    localStorage.setItem('userData', JSON.stringify({ userId: uid, token: _token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  // Keep the user logged in until his token expires

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token) {
      login(storedData.userId, storedData.token);
    }
  }, [login]);

  // When using this hook, you can get ahold of any of these:

  return {
    userId, token, login, logout
  };

  /* These will be available in any component (will allow you to check
     ifLoggedIn & privilege related things).

     You need to import {useContext} from React in your functional Component (not App.js)
     You need to import { AuthContext } from the context folder then you can simply use:

     const auth = useContext(AuthContext);

     auth will be an Object holding everything in auth-context.js,
     so you will be able to do things like:

     -> if(auth.isLoggedIn)
     -> auth.userId === wantedId
     -> auth.login(id, token)
     */


};
