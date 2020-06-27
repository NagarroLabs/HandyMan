import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../WhiteLogo.svg";
import "./LoginForm.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
/* eslint-disable */

function LoginForm(props) {
  const [errors, setErrors] = useState({});

  function formIsValid() {
    const _errors = {};

    props.loginInfo.email.length === 0
      ? (_errors.emailError = "Email is required!")
      : "";

    setErrors(_errors);
  }

  const onLoginButtonClick = (event) => {
    props.onSubmit(event);
    formIsValid();
  };

  return (
    <>
      <Form className="RegisterLoginPage">
        <img src={logo} width="500px" alt="HandyMan" />
        <br />
        <h1 className="loginTitle">L o g i n</h1>
        <br />
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Email"
                id="email"
                name="email"
                label="email"
                onChange={props.onChange}
                value={props.loginInfo.email}
              />
            </Form.Group>
            {errors.emailError && (
              <div className="alert alert-danger">{errors.emailError}</div>
            )}
          </Col>
        </Form.Row>
        <Form.Row>
          <Col className="inputBox">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={props.onChange}
              />
            </Form.Group>
          </Col>
        </Form.Row>
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
      </Form>
    </>
  );
}

LoginForm.propTypes = {
  loginInfo: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;
