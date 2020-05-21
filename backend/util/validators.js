/* Middlewares to validate and sanitize inputs.
   You can check out the package at : https://express-validator.github.io/docs/
   Options for validating and sanitizing here: https://github.com/validatorjs/validator.js#validators */

const { check } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/users');

module.exports = {
  requireFirstName: check('firstName')
<<<<<<< HEAD
    .not()
    .isEmpty()
    .trim()
    .withMessage('First name must not be empty.'),
  requireLastName: check('lastName')
    .not()
    .isEmpty()
=======
    .not().isEmpty()
    .trim()
    .withMessage('First name must not be empty.'),
  requireLastName: check('lastName')
    .not().isEmpty()
>>>>>>> cbc19f53118317244704859382e5e4b94a8afc5a
    .trim()
    .withMessage('Last name must not be empty.'),
  requirePassword: check('password')
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage('Must be between 6 and 20 characters.'),
  requireEmail: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must be a valid email.')
    .custom(async (email) => {
      let existingUser;
      try {
        existingUser = await User.findOne({ email });
      } catch (err) {
        throw new HttpError('Signing up failed, please try again.', 500);
      }

      if (existingUser) {
<<<<<<< HEAD
        throw new HttpError('User exists already, please login instead.', 422);
=======
        throw new HttpError(
          'User exists already, please login instead.',
          422
        );
>>>>>>> cbc19f53118317244704859382e5e4b94a8afc5a
      }
      return true;
    }),
  requireUsername: check('userName')
<<<<<<< HEAD
    .not()
    .isEmpty()
=======
    .not().isEmpty()
>>>>>>> cbc19f53118317244704859382e5e4b94a8afc5a
    .trim()
    .withMessage('Must be a valid username.')
    .custom(async (userName) => {
      let existingUser;
      try {
        existingUser = await User.findOne({ userName });
      } catch (err) {
        throw new HttpError('Signing up failed, please try again', 500);
      }

      if (existingUser) {
        throw new HttpError(
          'Username is already taken, please choose another.',
          422
        );
      }
      return true;
    }),
  requirePhone: check('phone')
<<<<<<< HEAD
    .not()
    .isEmpty()
    .trim()
    .withMessage('Phone must not be empty.')
    .custom(async (phone) => {
      let existingUser;
      try {
        existingUser = await User.findOne({ phone });
      } catch (err) {
        throw new HttpError('Signing up failed, please try again', 500);
      }

      if (existingUser) {
        throw new HttpError(
          'Phone is already in use, please enter a different one.',
          422
        );
      }
      return true;
    })
=======
    .not().isEmpty()
    .trim()
    .withMessage('Phone must not be empty.'),
>>>>>>> cbc19f53118317244704859382e5e4b94a8afc5a
};
