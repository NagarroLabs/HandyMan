import React, { useState } from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import logo from "../Logo.svg";
import "./RegisterForm.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function RegisterForm(props) {
  function validate(email, password) {
    // true means invalid, so our conditions got reversed
    return {
      email: email.length === 0,
      password: password.length === 0,
    };
  }

  function formIsValid() {
    return {
      error_firstName:
        props.user.firstName.length === 0 ? "First name is required!" : "",
      error_lastName:
        props.user.lastName.length === 0 ? "Last name is required!" : "",
      error_email: props.user.email.length === 0 ? "Email is required!" : "",
      error_username:
        props.user.username.length === 0 ? "Username is required!" : "",
      error_gender: props.user.gender.length === 0 ? "Gender is required!" : "",
      error_phoneNumber:
        props.user.phoneNumber.length === 0 ? "Phone number is required!" : "",
      error_birthday:
        props.user.birthday.length === 0 ? "Birthday is required!" : "",
    };
  }

  let errors = formIsValid();
  console.log(errors.error_firstName);

  // function handleSubmit(event) {

  //   if (errors.error_firstName === "") return;
  // }

  const isEnabled =
    props.user.firstName.length > 0 &&
    props.user.lastName.length > 0 &&
    props.user.email.length > 0 &&
    props.user.phoneNumber.length > 0 &&
    props.user.gender.length > 0 &&
    props.user.birthday.length > 0 &&
    props.user.username.length > 0;

  console.log(props.user.password);

  return (
    <>
      <img src={logo} width="500px" alt="HandyMan" />
      <br />
      <h1 className="registerTitle">R e g i s t e r</h1>
      <br />
      <Form className="registerForm" onSubmit="handleSubmit">
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
            {/* {errors.error_firstName && (
              <div className="alert alert-danger">{errors.error_firstName}</div>
            )} */}
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
          </Col>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                placeholder="Phone number"
                id="phoneNumber"
                name="phoneNumber"
                onChange={props.onChange}
                value={props.user.phoneNumber}
              />
            </Form.Group>
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
            <Form.Label style={{ marginLeft: "20px" }}>Gender</Form.Label>
            <div key={`inline-radio`} style={{ color: "white" }}>
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
          </Col>

          <Col className="inputBox">
            <Form.Group style={{ margin: "auto", padding: "10px" }}>
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                style={{ width: "240px" }}
                type="date"
                name="birthday"
                onChange={props.onChange}
                value={props.user.birthday}
              />
            </Form.Group>
          </Col>

          {console.log(props.user.birthday)}
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
          </Col>

          <Col className="inputBox">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Form.Row>

        {
          <style>
            {`
              .btn-princ {
                background-color:#E9810A;
                }

              .btn-princ:active {
                top:1px;
                background-color: rgb(231, 155, 68); 
                }

              .btn-sec {
                background-color:#6D213C;
              }

              .btn-sec:active{
                top:1px;
                background-color: rgb(155, 46, 84);
               }

              .progress-bar{
                background-color: #E9810A;
                
              }

              `}
          </style>
        }
      </Form>
      <br />
      <Button variant="princ">Register</Button>
      <br />
    </>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default RegisterForm;
