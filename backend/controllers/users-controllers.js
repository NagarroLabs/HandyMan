const HttpError = require('../models/http-error');
const User = require('../models/users');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    return next(new HttpError('Fetching users failed, please try again later.'), 500);
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const {
    firstName, lastName, email, password, phone, userName, gender, birthDate
  } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return next(new HttpError('Signing up failed, please try again', 500));
  }

  if (existingUser) {
    return next(new HttpError(
      'User exists already, please login instead',
      422
    ));
  }

  // To be updated with proper password storage
  const createdUser = new User({
    firstName,
    lastName,
    email,
    password,
    phone,
    userName,
    gender,
    birthDate: new Date(birthDate)
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Signing up user failed.', 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError('Login failed, please try again', 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      'Invalid credentials, could not log you in',
      401
    );
    return next(error);
  }

  res.status(200).json({ message: 'Logged in' });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
