/* Middlewares to validate and sanitize inputs.
   You can check out the package at : https://express-validator.github.io/docs/
   Options for validating and sanitizing here: https://github.com/validatorjs/validator.js#validators */

const { check } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/users");
const HandyMan = require("../models/handyMan");

module.exports = {
  requireFirstName: check("firstName")
    .not()
    .isEmpty()
    .trim()
    .withMessage("First name must not be empty."),
  requireLastName: check("lastName")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Last name must not be empty."),
  requirePassword: check("password")
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage("Must be between 6 and 20 characters."),
  requireEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must be a valid email.")
    .custom(async (email) => {
      let existingUser;
      try {
        existingUser = await User.findOne({ email });
      } catch (err) {
        throw new HttpError("Signing up failed, please try again.", 500);
      }

      if (existingUser) {
        throw new HttpError("User exists already, please login instead.", 422);
      }
      return true;
    }),

  requireUsername: check("userName")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Must be a valid username.")
    .custom(async (userName) => {
      let existingUser;
      try {
        existingUser = await User.findOne({ userName });
      } catch (err) {
        throw new HttpError("Signing up failed, please try again", 500);
      }

      if (existingUser) {
        throw new HttpError(
          "Username is already taken, please choose another.",
          422
        );
      }
      return true;
    }),
  requirePhone: check("phone")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Phone must not be empty.")
    .custom(async (phone) => {
      let existingUser;
      try {
        existingUser = await User.findOne({ phone });
      } catch (err) {
        throw new HttpError("Signing up failed, please try again", 500);
      }

      if (existingUser) {
        throw new HttpError(
          "Phone is already in use, please enter a different one.",
          422
        );
      }
      return true;
    }),
  requireEditPhone: check("phone")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Phone must not be empty."),
  requireEditMail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must be a valid email."),

  requireSkills: check("skills")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Skills must not be empty."),
  requireSpokenLanguages: check("spokenLanguages")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Spoken languages must not be empty."),
  requireCountry: check("country")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Country must not be empty."),
  requireCity: check("city")
    .not()
    .isEmpty()
    .trim()
    .withMessage("City must not be empty."),
  requireAddress: check("address")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Address must not be empty."),
};
