import React, { useState, useContext } from 'react';
import LoginForm from '../components/LoginForm';

import { useHttpClient } from '../shared/hooks/http-hook';
import { AuthContext } from '../shared/context/auth-context';

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  function handleChange({ target }) {
    setLoginInfo({
      ...loginInfo,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        'http://localhost:3001/api/users/login',
        'POST',
        JSON.stringify({
          email: loginInfo.email,
          password: loginInfo.password,
        }),
        {
          'Content-Type': 'application/json',
        }
      );
      auth.login(responseData.userId, responseData.token);
      console.log('logged in');
    } catch (err) {
      console.log('error' + err);
    }
  }

  return (
    <>
      <LoginForm
        loginInfo={loginInfo}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default LoginPage;
