import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import EditPasswordForm from "../components/EditPasswordForm";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";

import "react-toastify/dist/ReactToastify.css";
import "../components/EditProfileForm.css";

function EditProfilePage() {
  const { sendRequest } = useHttpClient();
  const [user, setUser] = useState({
    id: null,
    password: "",
    passwordConfirmation: ""
  });

  const auth = useContext(AuthContext);
  const userId = auth.userId;
  let history = useHistory();

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      const url = `http://localhost:3001/api/users/update/${userId}/password`;
      const responseData = await sendRequest(
        url,
        "PATCH",
        JSON.stringify({
          password: user.password,
          passwordConfirmation: user.passwordConfirmation,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "JWT " + auth.token,
        }
      );
      auth.login(responseData.userId, responseData.token);
      toast.success("Password successfully updated!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      history.push("/");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong updating the password.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    }
  }

  return (
    <>
      <EditPasswordForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
        userId={userId}
      />
    </>
  );
}

export default EditProfilePage;
