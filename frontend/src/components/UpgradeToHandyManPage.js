import React, { useState, useContext, useEffect } from "react";
import UpgradeToHandyManForm from "./UpgradeToHandyManForm";
import { addUser } from "../mock-api/usersApi";
import { AuthContext } from "../shared/context/auth-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* eslint-disable */

function UpgradeToHandyManPage() {
  const [user, setUser] = useState({
    id: null,
    areaOfInterest: "",
    skills: "",
    spokenLanguages: "",
    city: "",
    country: "",
    address: "",
    companyName: "",
    companyAddress: "",
    companyWebsite: "",
    companyPhone: "",
    experience: "",
  });

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // try {
    //   const responseData = await sendRequest(
    //     "http://localhost:3001/api/users/signup", // to be modified
    //     "POST",
    //     JSON.stringify({
    //       firstName: user.firstName,
    //       lastName: user.lastName,
    //       email: user.email,
    //       userName: user.username,
    //       phone: user.phone,
    //       gender: user.gender,
    //       birthDate: user.birthDate,
    //       password: user.password,
    //     }),
    //     {
    //       "Content-Type": "application/json",
    //     }
    //   );
    //   auth.login(responseData.userId, responseData.token);
    //   toast.success("Account successfully created!", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 2000,
    //   });
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Email or username already taken!", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: false,
    //   });
    // }
  }

  return (
    <>
      <UpgradeToHandyManForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default UpgradeToHandyManPage;
