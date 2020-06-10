import React, { useState } from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

const specializations = ["Finance", "Account Executive", "Technology"];

/* eslint-disable */

export default function EditProfileForm(props) {
  const [errors, setErrors] = useState({});

  function formIsValid() {
    const _errors = {};

    props.user.areaOfInterest.length === 0
      ? (_errors.areaOfInterestError = "Area of interest is required!")
      : "";

    props.user.skills.length === 0
      ? (_errors.skillsError = "Skills are required!")
      : "";

    props.user.spokenLanguages.length === 0
      ? (_errors.spokenLanguagesError = "Spoken languages are required!")
      : "";

    props.user.country.length === 0
      ? (_errors.countryError = "Country is required!")
      : "";

    props.user.city.length === 0
      ? (_errors.cityError = "City is required!")
      : "";

    props.user.address.length === 0
      ? (_errors.addressError = "Address is required!")
      : "";

    props.user.experience.length === 0
      ? (_errors.experienceError = "Experience is required!")
      : "";

    setErrors(_errors);
  }

  const submitButtonClick = (event) => {
    props.onSubmit(event);
    formIsValid();
  };

  return (
    <>
      <Form className="EditProfilePage">
        <br />
        <h1 className="editProfileTitle">Upgrade to HandyMan</h1>
        <br />
        <Form.Row>
          <Col>
            <Form.Group style={{ marginRight: "5px" }}>
              <Form.Label>Select your area of interest</Form.Label>
              <select
                className="form-control"
                id="areaOfInterest"
                value={props.user.areaOfInterest}
                name="areaOfInterest"
                onChange={props.onChange}
                style={{ color: "#000000" }}
              >
                <option value="" style={{ color: "#000000" }}>
                  Choose...
                </option>
                {specializations.map((pc) => (
                  <option
                    key={pc}
                    value={pc.toLowerCase()}
                    style={{ color: "#000000" }}
                  >
                    {pc}
                  </option>
                ))}
              </select>
            </Form.Group>
          </Col>

          <Col className="inputBox">
            <Form.Group style={{ marginLeft: "50px" }}>
              <Form.Label>Skills</Form.Label>
              <Form.Control
                placeholder="Enter up to 5 skills"
                id="skills"
                name="skills"
                value={props.user.skills}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.skillsError && (
              <div className="alert alert-danger">{errors.skillsError}</div>
            )}
          </Col>
        </Form.Row>

        <br />
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Spoken languages</Form.Label>
              <Form.Control
                placeholder="e.g. English, Romanian"
                id="spokenLanguages"
                name="spokenLanguages"
                value={props.user.spokenLanguages}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.spokenLanguagesError && (
              <div className="alert alert-danger">
                {errors.spokenLanguagesError}
              </div>
            )}
          </Col>

          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                placeholder="Country"
                id="country"
                name="country"
                value={props.user.country}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.countryError && (
              <div className="alert alert-danger">{errors.countryError}</div>
            )}
          </Col>
        </Form.Row>

        <br />
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="City"
                id="city"
                name="city"
                value={props.user.city}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.cityError && (
              <div className="alert alert-danger">{errors.cityError}</div>
            )}
          </Col>

          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="Address"
                id="address"
                name="address"
                value={props.user.address}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.addressError && (
              <div className="alert alert-danger">{errors.addressError}</div>
            )}
          </Col>
        </Form.Row>

        <br />
        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Company name</Form.Label>
              <Form.Control
                placeholder="Company name"
                id="companyName"
                name="companyName"
                value={props.user.companyName}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.companyNameError && (
              <div className="alert alert-danger">
                {errors.companyNameError}
              </div>
            )}
          </Col>

          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Company address</Form.Label>
              <Form.Control
                placeholder="Company address"
                id="companyAddress"
                name="companyAddress"
                value={props.user.companyAddress}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.companyAddressError && (
              <div className="alert alert-danger">
                {errors.companyAddressError}
              </div>
            )}
          </Col>
        </Form.Row>

        <br />

        <Form.Row>
          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Company website</Form.Label>
              <Form.Control
                placeholder="Company website"
                id="companyWebsite"
                name="companyWebsite"
                value={props.user.companyWebsite}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.companyWebsiteError && (
              <div className="alert alert-danger">
                {errors.companyWebsiteError}
              </div>
            )}
          </Col>

          <Col className="inputBox">
            <Form.Group>
              <Form.Label>Company phone</Form.Label>
              <Form.Control
                placeholder="Company phone"
                id="companyPhone"
                name="companyPhone"
                value={props.user.companyPhone}
                onChange={props.onChange}
              />
            </Form.Group>
            {errors.companyPhoneError && (
              <div className="alert alert-danger">
                {errors.companyPhoneError}
              </div>
            )}
          </Col>
        </Form.Row>
        <br />

        <Form.Row>
          <Col className="inputBox">
            <Form.Label>Experience</Form.Label>
            <div key={`inline-radio`} style={{ color: "white" }}>
              <Form.Check
                className="blueLettering"
                type="radio"
                label="Beginner"
                name="gender"
                onChange={props.onChange}
                value="male"
              />
              <Form.Check
                className="blueLettering"
                type="radio"
                label="Intermediate (2 to 5 years)"
                name="gender"
                onChange={props.onChange}
                value="female"
              />

              <Form.Check
                className="blueLettering"
                type="radio"
                label="Advanced (more than 5 years)"
                name="gender"
                onChange={props.onChange}
                value="female"
              />
            </div>
            {errors.experienceError && (
              <div className="alert alert-danger">{errors.experienceError}</div>
            )}
          </Col>
        </Form.Row>

        <br />
        <Button
          onClick={submitButtonClick}
          className="btn-princ"
          style={{
            width: "300px",
            height: "70px",
            fontSize: "20px",
          }}
        >
          Upgrade to HandyMan
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
