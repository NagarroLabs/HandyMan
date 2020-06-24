import React, { useState, useContext } from "react";
import { connect } from "react-redux";

import RegisterForm from "../components/RegisterForm";
import { useHttpClient } from "../shared/hooks/http-hook";
import { AuthContext } from "../shared/context/auth-context";
import { setLoggedIn } from "../actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function RegisterPage(props) {
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
  const { sendRequest } = useHttpClient();

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // addUser(user);

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
      props.setLoggedIn(true);
      auth.login(responseData.userId, responseData.token);
      console.log("logged in");
      toast.success("Account successfully created!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (err) {
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

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, { setLoggedIn })(RegisterPage);
