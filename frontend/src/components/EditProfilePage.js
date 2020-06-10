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

  function handleSubmit(event) {
    event.preventDefault();
    addUser(user);
  }

  return (
    <>
      {/* {getUserInfo()} */}
      {/* {console.log(loadedUsers.firstName)} */}
      <EditProfileForm
        user={loadedUser}
        onChange={handleChange}
        onSubmit={getUserInfo}
      />
    </>
  );
}

export default EditProfilePage;
