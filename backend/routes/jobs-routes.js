const express = require('express');

const {requireJobName,
       requireJobDescription,
       requireJobCategory,
       requireJobBudget,
       requireJobCountry,
       requireJobCity,
       requireJobAddress} = require('../util/jobValidators');
const { handleErrors } = require('../middlewares/handle-errors.js');
  const {
    addJob
  } = require('../controllers/jobs-controllers');
const checkAuth = require('../middlewares/check-auth');

const router = express.Router();

router.post('/new', checkAuth,
    [requireJobName,
    requireJobDescription,
    requireJobCategory,
    requireJobBudget,
    requireJobCountry,
    requireJobCity,
    requireJobAddress], handleErrors, addJob);

module.exports = router;
