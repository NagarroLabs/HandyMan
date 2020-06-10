import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../WhiteLogo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

/* eslint-disable */

export default function EditProfileForm(props) {
  const [errors, setErrors] = useState({});

  function formIsValid() {
    const _errors = {};

    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = validEmailRegex.test(props.user.email);
    isEmailValid === false
      ? (_errors.emailError = "Please enter a valid email!")
      : "";

    props.user.firstName.length === 0
      ? (_errors.firstNameError = "First name is required!")
      : "";

    props.user.lastName.length === 0
      ? (_errors.lastNameError = "Last name is required!")
      : "";

    props.user.username.length === 0
      ? (_errors.usernameError = "Username is required!")
      : "";

    props.user.gender.length === 0
      ? (_errors.genderError = "Gender is required!")
      : "";

    props.user.phone.length !== 10
      ? (_errors.phoneError = "Phone number is required!")
      : "";

    props.user.birthDate.length === 0
      ? (_errors.birthDateError = "Birthday is required!")
      : "";

    setErrors(_errors);
  }

  const submitButtonClick = (event) => {
    props.onSubmit(event);
    formIsValid();
  };

  const isEnabled =
    props.user.firstName.length > 0 &&
    props.user.lastName.length > 0 &&
    props.user.email.length > 0 &&
    props.user.phone.length > 0 &&
    props.user.gender.length > 0 &&
    props.user.birthDate.length > 0 &&
    props.user.username.length > 0;

  return (
    <>
      <Form className="EditProfilePage">
        <img src={logo} width="500px" alt="HandyMan" />
        <br />
        <h1 className="editProfileTitle">E d i t P r o f i l e</h1>
        <br />
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control
                placeholder="First name"
                id="firstName"
                name="firstName"
                onChange={props.onChange}
                value={props.user.firstName}
              />
            </Form.Group>
            {errors.firstNameError && (
              <div className="alert alert-danger">{errors.firstNameError}</div>
            )}
          </Col>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                placeholder="Last name"
                id="lastName"
                name="lastName"
                onChange={props.onChange}
                value={props.user.lastName}
              />
            </Form.Group>
            {errors.lastNameError && (
              <div className="alert alert-danger">{errors.lastNameError}</div>
            )}
          </Col>
        </Form.Row>

        <br />
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                onChange={props.onChange}
                value={props.user.email}
              />
            </Form.Group>
            {errors.emailError && (
              <div className="alert alert-danger">{errors.emailError}</div>
            )}
          </Col>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                placeholder="Phone number"
                id="phone"
                name="phone"
                onChange={props.onChange}
                value={props.user.phone}
              />
            </Form.Group>
            {errors.phoneError && (
              <div className="alert alert-danger">{errors.phoneError}</div>
            )}
          </Col>
        </Form.Row>

        <br />
        <Form.Row>
          <Col
            className="inputBox"
            style={{
              marginTop: "20px",
              marginLeft: "150px",
            }}
          >
            <Form.Label style={{ marginLeft: "10px", marginRight: "150px" }}>
              Gender
            </Form.Label>
            <div
              key={`inline-radio`}
              style={{
                color: "white",
              }}
            >
              <Form.Check
                inline
                type="radio"
                label="Male"
                name="gender"
                onChange={props.onChange}
                value="male"
              />
              <Form.Check
                inline
                type="radio"
                label="Female"
                name="gender"
                onChange={props.onChange}
                value="female"
              />
            </div>
            {errors.genderError && (
              <div className="alert alert-danger">{errors.genderError}</div>
            )}
          </Col>

          <Col className="inputBox">
            <Form.Group
            // style={{ margin: "auto"}}
            >
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                style={{ width: "240px" }}
                type="date"
                name="birthDate"
                onChange={props.onChange}
                value={props.user.birthDate}
              />
            </Form.Group>
            {errors.birthDateError && (
              <div className="alert alert-danger">{errors.birthDateError}</div>
            )}
          </Col>
        </Form.Row>

        <br />

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
                value={props.user.username}
              />
            </Form.Group>
            {errors.usernameError && (
              <div className="alert alert-danger">{errors.usernameError}</div>
            )}
          </Col>

          <Col className="inputBox">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
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
          onClick={submitButtonClick}
          className="btn-princ"
          style={{
            width: "300px",
            height: "70px",
            fontSize: "40px",
          }}
        >
          Update profile
        </Button>
        <br />
      </Form>
    </>
  );
}

EditProfileForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
