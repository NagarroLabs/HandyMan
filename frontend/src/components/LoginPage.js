import React, { useState, useContext } from "react";
import LoginForm from "./LoginForm";

import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
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
        "http://localhost:3001/api/users/login",
        "POST",
        JSON.stringify({
          email: loginInfo.email,
          password: loginInfo.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(responseData.userId, responseData.token);
      toast.success("Logged in successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (err) {
      toast.error("Invalid email or password!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
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
