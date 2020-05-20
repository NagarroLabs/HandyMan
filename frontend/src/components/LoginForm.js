import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../WhiteLogo.svg";
import "./LoginForm.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col",
/* eslint-disable */

function LoginForm(props) {
  const [errors, setErrors] = useState({});

  function formIsValid() {
    const _errors = {};

    // const validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const isEmailValid = validEmailRegex.test(props.user.email);
    // isEmailValid === false
    //   ? (_errors.emailError = "Please enter a valid email!")
    //   : "";

    props.loginInfo.username.length === 0
      ? (_errors.usernameError = "Username is required!")
      : "";

    setErrors(_errors);
  }

  const onLoginButtonClick = (event) => {
    props.onSubmit(event);
    formIsValid();
  };

  return (
    <>
      <img src={logo} width="500px" alt="HandyMan" />
      <br />
      <h1 className="loginTitle">L o g i n</h1>
      <br />
      <Form className="formStyle">
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder="Username"
                id="username"
                name="username"
                label="Username"
                onChange={props.onChange}
                value={props.loginInfo.username}
              />
            </Form.Group>
            {errors.usernameError && (
              <div className="alert alert-danger">{errors.usernameError}</div>
            )}
          </Col>
        </Form.Row>
        <Form.Row>
          <Col className="inputBox">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
      <br />
      <Button
        onClick={onLoginButtonClick}
        className="btn-princ formStyle"
        style={{
          width: "300px",
          height: "70px",
          fontSize: "40px",
        }}
      >
        Login
      </Button>
      <br />
    </>
  );
}

LoginForm.propTypes = {
  loginInfo: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;
