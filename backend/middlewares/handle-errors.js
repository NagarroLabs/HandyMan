const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

module.exports = {
  handleErrors(req, res, next) {
    const errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs, please check your data.', 422)
      );
    }

    next();
  }
};
