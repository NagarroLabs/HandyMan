import React, { useState } from "react";
import RegisterForm from "./RegisterForm";

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

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // if (!formIsValid()) return;
    // let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (re.test(event.target.name)) {
    //   console.log("eroare");
    // } else {
    // }
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
