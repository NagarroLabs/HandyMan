/* Middlewares to validate and sanitize inputs.
   You can check out the package at : https://express-validator.github.io/docs/
   Options for validating and sanitizing here: https://github.com/validatorjs/validator.js#validators */

   const { check } = require("express-validator");

   const HttpError = require("../models/http-error");
   
   module.exports = {
   
     requireJobName: check('jobName')
       .not().isEmpty()
       .trim()
       .withMessage('Job name must not be empty.'),
     requireJobDescription: check('jobDescription')
       .not().isEmpty()
       .trim()
       .withMessage("Job description must not be empty."),
     requireJobCategory: check('jobCategory')
       .not().isEmpty()
       .trim()
       .withMessage("Job category must not be empty."),
    requireJobBudget: check('jobBudget')
       .not().isEmpty()
       .trim()
       .withMessage("Job budget must not be empty."),
    requireJobCountry: check('jobCountry')
       .not().isEmpty()
       .trim()
       .withMessage("Job country must not be empty."),
    requireJobCity: check('jobCity')
       .not().isEmpty()
       .trim()
       .withMessage("Job city must not be empty."),
    requireJobAddress: check('jobAddress')
       .not().isEmpty()
       .trim()
       .withMessage("Job address must not be empty."),
   };
   