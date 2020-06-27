const express = require("express");
const {
  requireSkills,
  requireSpokenLanguages,
  requireCountry,
  requireCity,
  requireAddress,
} = require("../util/validators");

const {
  getHandyManById,
  upgradeToHandyMan,
  applyForJob,
  updateHandyMan,
} = require("../controllers/handyMan-controllers");

const { handleErrors } = require("../middlewares/handle-errors.js");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.get("/:userId", getHandyManById);

router.post(
  "/upgradeToHandyMan",
  checkAuth,
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

router.patch(
  "/editHandyMan",
  checkAuth,
  [
    requireSkills,
    requireSpokenLanguages,
    requireCountry,
    requireCity,
    requireAddress,
  ],
  handleErrors,
  updateHandyMan
);

router.post("/enlist/:jobId", checkAuth, applyForJob);

module.exports = router;
