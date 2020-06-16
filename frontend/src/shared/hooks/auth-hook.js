import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState();
    const [userId, setUserId] = useState();
    const [tokenExpirationDate, setTokenExpirationDate] = useState();

    // Persisting userId and token in the browser's localStorage

    const login = useCallback((uid, _token, expirationDate) => {
        // You can pass only the first 2 elements here (when calling it from an Auth-like component)
        setToken(_token);
        setUserId(uid);
        const tokenExpirationDate =
            expirationDate ||
            new Date(new Date().getTime() + 1000 * 60 * 60 * 6); //6 hours (can be modified, but must be in sync with the backend)
        setTokenExpirationDate(tokenExpirationDate);

        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: uid,
                token: _token,
                expiration: tokenExpirationDate.toISOString(),
            })
        );
    }, []);

    const logout = useCallback(() => {
        console.log('logging out');
        setToken(null);
        setUserId(null);
        setTokenExpirationDate(null);
        localStorage.removeItem('userData');
    }, []);

    // Keep the user logged in until his token expires

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime =
                tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [logout, token, tokenExpirationDate]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (
            storedData &&
            storedData.token &&
            new Date(storedData.expiration) > new Date()
        ) {
            login(
                storedData.userId,
                storedData.token,
                new Date(storedData.expiration)
            );
        }
    }, [login]);

    // When using this hook, you can get ahold of any of these:

    return {
        userId,
        token,
        login,
        logout,
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
