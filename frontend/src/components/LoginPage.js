import React, { useState } from "react";
import LoginForm from "./LoginForm";

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

  function handleSubmit(event) {
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
