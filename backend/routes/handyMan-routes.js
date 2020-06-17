const express = require("express");
const {
  requireSkills,
  requireSpokenLanguages,
  requireCountry,
  requireCity,
  requireAddress,
} = require("../util/validators");

const { upgradeToHandyMan } = require("../controllers/handyMan-controllers");

const { handleErrors } = require("../middlewares/handle-errors.js");

const router = express.Router();

router.post(
  "/upgradeToHandyMan",
  [
    requireSkills,
    requireSpokenLanguages,
    requireCountry,
    requireCity,
    requireAddress,
  ],
  handleErrors,
  upgradeToHandyMan
);

module.exports = router;
