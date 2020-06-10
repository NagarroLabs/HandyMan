import React, { useState, useContext, useEffect } from "react";
import EditProfileForm from "./EditProfileForm";
import { addUser } from "../mock-api/usersApi";
import { AuthContext } from "../shared/context/auth-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHttpClient } from "../shared/hooks/http-hook";

import "./EditProfileForm.css";
/* eslint-disable */

function EditProfilePage() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUser, setLoadedUser] = useState({
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
  const userId = auth.userId;

  // useEffect(() => {
  //   console.log("userid is: " + userId);
  //   getUserInfo();
  // }, []);

  async function getUserInfo() {
    try {
      const url = "http://localhost:3001/api/users/" + userId;
      const responseData = await sendRequest(url);
      setLoadedUser(responseData.user);
    } catch (err) {
      toast.error("Something went wrong.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  }

  function handleChange({ target }) {
    setLoadedUser({
      ...loadedUser,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const url = "http://localhost:3001/api/users/update/" + userId;
      const responseData = await sendRequest(
        url,
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
      toast.success("Account successfully upated!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
      toast.error("SOmething went wrong.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    }
  }

  return (
    <>
      {/* {getUserInfo()} */}
      <EditProfileForm
        user={loadedUser}
        onChange={handleChange}
        onSubmit={getUserInfo}
      />
    </>
  );
}

export default EditProfilePage;
