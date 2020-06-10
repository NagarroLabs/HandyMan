import React, { useState, useContext } from "react";
import RegisterForm from "./RegisterForm";
import { addUser } from "../mock-api/usersApi";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const [user, setUser] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: "",
    gender: "",
    birthDate: "",
    password: "",
  });

  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        "http://localhost:3001/api/users/signup",
        "POST",
        JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          userName: user.username,
          phone: user.phone,
          gender: user.gender,
          birthDate: user.birthDate,
          password: user.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(responseData.userId, responseData.token);
      toast.success("Account successfully created!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
      toast.error("Email or username already taken!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    }
  }

  return (
    <>
      <RegisterForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default RegisterPage;
