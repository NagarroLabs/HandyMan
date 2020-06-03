import React, { useState } from "react";
import LoginForm from "./LoginForm";

import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  function handleChange({ target }) {
    setLoginInfo({
      ...loginInfo,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
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
