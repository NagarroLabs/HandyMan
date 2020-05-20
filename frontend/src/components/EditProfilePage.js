import React, { useState } from "react";
import EditProfileForm from "./EditProfileForm";
import { addUser } from "../mock-api/usersApi",
/* eslint-disable */

function EditProfilePage() {
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

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addUser(user);
  }

  return (
    <>
      <EditProfileForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default EditProfilePage;
