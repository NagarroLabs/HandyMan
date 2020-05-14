import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { addUser } from "../mock-api/usersApi";

function RegisterPage() {
  const [user, setUser] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    gender: "",
    birthday: "",
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
    console.log("registered");
    addUser(user);
  }

  return (
    <>
      <RegisterForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p className="lettering" style={{ fontSize: "18px" }}>
        Already have an account?{" "}
        <a
          href=""
          style={{ color: "#ffe18a", fontFamily: "Rubik", fontSize: "20px" }}
        >
          Sign in
        </a>
      </p>
    </>
  );
}

export default RegisterPage;
