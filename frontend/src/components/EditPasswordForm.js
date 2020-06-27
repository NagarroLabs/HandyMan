import React, { useState } from "react";
import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function EditPasswordForm(props) {

  const [errors, setErrors] = useState({});

  function formIsValid() {
    const _errors = {};

    _errors.passwordLength = passwordLengthValidation() === false ? "Invalid password length!" : ""
    _errors.passwordConfirmation = props.user.password === props.user.passwordConfirmation ? "" : "Passwords do not match!";

    setErrors(_errors);
  }

  const submitButtonClick = (event) => {
    props.onSubmit(event);
    formIsValid();
  };

  const passwordLengthValidation = () => {
    if(props.user.password.length >= 6  && props.user.password.length <= 20){
        return true;
    }
    return false
  }

  return (
    <>
      <Form className="EditProfilePage">
        <br />
        <br />
        <h1 className="editProfileTitle">Change Password</h1>
        <br />
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <Form.Control size="lg"
                placeholder="Your new password"
                id="password"
                name="password"
                onChange={props.onChange}
                value={props.user.password}
                type="password"
              />
            </Form.Group>
            {errors.passwordLength && (
              <div className="alert alert-danger">{errors.passwordLength}</div>
            )}
          </Col>
        </Form.Row>

        <br />
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control size="lg"
                type="password"
                placeholder="Confirm password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                onChange={props.onChange}
                value={props.user.passwordConfirmation}
              />
            </Form.Group>
            {errors.passwordConfirmation && (
              <div className="alert alert-danger">{errors.passwordConfirmation}</div>
            )}
          </Col>
        </Form.Row>

        <br />
        <br />

        <Button
          onClick={submitButtonClick}
          className="btn-princ"
        >
          Update password
        </Button>
        <br />
      </Form>
    </>
  );
}

EditPasswordForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
