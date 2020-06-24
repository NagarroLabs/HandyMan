const mongoose = require("mongoose");

const handyManSchema = new mongoose.Schema({
  info: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  areaOfInterest: {
    type: [String],
    required: true,
  },
  topFiveSkills: {
    type: [String],
    required: true,
  },
  spokenLanguages: {
    type: [String],
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  companyName: String,
  companyPhone: String,
  companyWebsite: String,
  companyAdress: String,
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  jobsEnlistedTo: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Job",
      default: []
    }
  ],
  jobsAcceptedAt: [{
    type: mongoose.Types.ObjectId,
    ref: "Job"
  }
  ]
});

module.exports = mongoose.model("HandyMan", handyManSchema);
