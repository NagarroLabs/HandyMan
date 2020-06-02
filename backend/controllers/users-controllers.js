const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require('../models/users');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    return next(
      new HttpError('Fetching users failed, please try again later.'),
      500
    );
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  let user;
  try {
    user = await User.findById(userId, '-password');
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not find user.', 500)
    );
  }

  if (!user) {
    return next(new HttpError('Could not find user with the provided id', 404));
  }

  res.json({ user: user.toObject({ getters: true }) });
};

const signup = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    userName,
    gender,
    birthDate
  } = req.body;

  /* If you want to check out bcrypt's methods:
    https://www.npmjs.com/package/bcrypt
    hash & compare are mainly used */

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(new HttpError('Could not create user, please try again', 500));
  }

  const createdUser = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    phone,
    userName,
    gender,
    birthDate: new Date(birthDate)
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Signing up user to DB failed.', 500);
    return next(error);
  }

  /* I tried reading the Passport JWT Docs & Strategy,
     but considered this one easier to implement:
     https://www.npmjs.com/package/jsonwebtoken
     We can change it if you want */

  /* I don't know if we should include the userName in the token or not,
     depending on the frontend's needs, but left it for now. */

  let token;
  try {
    token = jwt.sign(
      {
        userId: createdUser.id,
        email: createdUser.email,
        userName: createdUser.userName
      },
      process.env.TOKEN_ENCRYPTION,
      { expiresIn: '6h' }
    );
  } catch (err) {
    const error = new HttpError('Signing up user failed.', 500);
    return next(error);
  }

  res.status(201).json({
    userId: createdUser.id,
    email: createdUser.email,
    userName: createdUser.userName,
    token
  });
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

  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in',
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials.',
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      'Invalid credentials, could not log you in',
      403
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
        userName: existingUser.userName
      },
      process.env.TOKEN_ENCRYPTION,
      { expiresIn: '6h' }
    );
  } catch (err) {
    const error = new HttpError('Logging in failed.', 500);
    return next(error);
  }

  res.status(200).json({
    userId: existingUser.id,
    email: existingUser.email,
    userName: existingUser.userName,
    token
  });
};

const updateUser = async (req, res, next) => {
  const { firstName, lastName, phone, birthDate, email, password } = req.body;
  const { userId } = req.params;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not find a user', 500)
    );
  }

  if (userId !== req.userData.userId) {
    return next(new HttpError('You do not have edit privileges.', 401));
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(new HttpError('Could not create user, please try again', 500));
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.phone = phone;
  user.birthDate = new Date(birthDate);
  user.email = email;

  try {
    await user.save();
  } catch (err) {
    const error = new HttpError('Updating user failed.', 500);
    return next(error);
  }

  res.status(200).json({
    user: user.toObject({ getters: true })
  });
};

const updatePassword = async(req, res, next) => {
  const { password } = req.body;
  const { userId } = req.params;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return next(
      new HttpError('Something went wrong, could not find a user', 500)
    );
  }

  if (userId !== req.userData.userId) {
    return next(new HttpError('You do not have password edit privileges.', 401));
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return next(new HttpError('Could not update user password, please try again', 500));
  }

  user.password = hashedPassword;

  try {
    await user.save();
  } catch (err) {
    const error = new HttpError('Updating user password failed.', 500);
    return next(error);
  }

  res.status(200).json("Update succeeded.");
}

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.updatePassword = updatePassword;
