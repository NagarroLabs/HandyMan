import React, { useState, useContext, useEffect } from "react";
import EditProfileForm from "./EditProfileForm";
import { AuthContext } from "../shared/context/auth-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useHttpClient } from "../shared/hooks/http-hook";

import "./EditProfileForm.css";
/* eslint-disable */

toast.configure();
function EditProfilePage() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [user, setUser] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const auth = useContext(AuthContext);
  const userId = auth.userId;

  useEffect(() => {
    async function getUserInfo() {
      try {
        const url = "http://localhost:3001/api/users/" + userId;
        const responseData = await sendRequest(url);
        setUser(responseData.user);
      } catch (err) {}
    }

    getUserInfo();
  }, [sendRequest, userId]);

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const url = "http://localhost:3001/api/users/update/" + userId;
      const responseData = await sendRequest(
        url,
        "PATCH",
        JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "JWT " + auth.token,
        }
      );
      auth.login(responseData.userId, responseData.token);
      toast.success("Account successfully updated!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    }
  }

  return (
    <>
      <EditProfileForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
        userId={userId}
      />
    </>
  );
}

export default EditProfilePage;
