import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import "./index.css";

function RegisterPage() {
  const [errors, setErrors] = useState({});
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

  function formIsValid() {
    const _errors = {};

    if (!user.firstName) _errors.firstName = "First name is required!";
    if (!user.lastName) _errors.lastName = "Last name is required!";
    if (!user.email.includes("@")) _errors.email = "Email is required!";
    if (!user.username) _errors.username = "Username is required!";
    if (!user.gender) _errors.gender = "Gender is required!";
    if (!user.phoneNumber) _errors.phoneNumber = "Phone number is required!";
    if (!user.birthday) _errors.birthday = "Birthday is required!";
    if (!user.password) _errors.password = "Password is required!";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    if (!formIsValid()) return;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(event.target.name)) {
      console.log("eroare");
    } else {
    }
  }

  return (
    <>
      <RegisterForm
        user={user}
        onChange={handleChange}
        errors={errors}
        onSubmit={handleSubmit}
      />
      <p className="lettering">
        Already have an account?{" "}
        <a href="" style={{ color: "#ffe18a" }}>
          Sign in
        </a>
      </p>
    </>
  );
}

export default RegisterPage;
