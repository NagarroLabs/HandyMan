import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import "./index.css";

function RegisterForm(props) {
  return (
    <>
      <form className="registerForm" onSubmit={props.onSubmit}>
        <h1 className="registerTitle">Register</h1>

        <TextInput
          id="firstName"
          name="firstName"
          label="First Name"
          onChange={props.onChange}
          value={props.user.firstName}
          error={props.errors.firstName}
        />

        <TextInput
          id="lastName"
          name="lastName"
          label="Last Name"
          onChange={props.onChange}
          value={props.user.lastName}
          error={props.errors.lastName}
        />

        <TextInput
          id="email"
          name="email"
          label="E-mail"
          onChange={props.onChange}
          value={props.user.email}
          error={props.errors.email}
        />

        <TextInput
          id="username"
          name="username"
          label="Username"
          onChange={props.onChange}
          value={props.user.username}
          error={props.errors.username}
        />

        <TextInput
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          onChange={props.onChange}
          value={props.user.phoneNumber}
          error={props.errors.phoneNumber}
        />

        <br />

        <label className="lettering">
          Birthday:
          <br />
          <input
            style={{ width: 160 }}
            type="date"
            name="birthday"
            onChange={props.onChange}
            value={props.errors.birthday}
          />
          {props.errors.birthday && (
            <div className="alert alert-danger">{props.errors.birthday}</div>
          )}
        </label>

        <p className="lettering">Gender: </p>

        <label className="lettering">
          <input
            type="radio"
            name="gender"
            onChange={props.onChange}
            value="male"
            checked={props.user.gender === "male"}
          />{" "}
          Male
        </label>

        <label className="lettering">
          <input
            type="radio"
            name="gender"
            onChange={props.onChange}
            value="female"
            checked={props.user.gender === "female"}
          />{" "}
          Female
        </label>

        <br />
        <br />

        <label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={props.onChange}
            value={props.user.password}
          />
        </label>

        <br />

        <input type="submit" value="Join Handyman!" className="submitButton" />
        {/* <button className="submitButton" onClick>
          <span className="lettering">SUBMIT</span>
        </button> */}
      </form>
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
