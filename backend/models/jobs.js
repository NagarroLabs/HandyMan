const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobOwner: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  jobName: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  jobCategory: {
    type: String,
    required: true
  },
  jobBudget: {
    type: String,
    required: true
  },
  jobStartDate: {
    type: Date,
    required: true
  },
  jobCompletionTimeFrame: {
    type: Date,
    required: true
  },
  jobReqSkills: {
    type: [String],
    required: true
  },
  jobCountry: {
    type: String,
    required: true
  },
  jobCity: {
    type: String,
    required: true
  },
  jobAddress: {
    type: String,
    required: true
  },
  jobComments: {
    title: String,
    postBody: String
  },
  jobApplicants: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'HandyMan'
    }
  ],
  jobAssignee: {
    type: mongoose.Types.ObjectId,
    ref: 'HandyMan'
  }
});

module.exports = mongoose.model('Job', jobSchema);
