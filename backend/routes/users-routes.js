const express = require('express');

const {
  requireFirstName,
  requireLastName,
  requireEmail,
  requirePassword,
  requirePhone,
  requireUsername
} = require('../util/validators');
const { getUsers, signup, login } = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', getUsers);

router.post(
  '/signup',
  [
    requireFirstName,
    requireLastName,
    requireEmail,
    requirePassword,
    requirePhone,
    requireUsername
  ],
  signup
);

router.post('/login', login);

module.exports = router;
