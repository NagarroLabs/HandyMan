const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const User = require('../models/users');
const Job = require('../models/jobs');

const addJob = async (req, res, next) => {
    
    const { jobName, jobDescription, jobCategory, jobBudget, jobStartDate,
            jobCompletionTimeFrame, jobReqSkills, jobDifficulty, jobCountry,
            jobCity, jobAddress } = req.body;
  
    const addedJob = new Job({
       jobName,
       jobDescription,
       jobCategory,
       jobBudget,
       jobStartDate,
       jobCompletionTimeFrame,
       jobReqSkills, 
       jobDifficulty,
       jobCountry,
       jobCity, 
       jobAddress,
       jobOwner: req.userData.userId
    });
  
    let user;
    try {
      user = await User.findById(req.userData.userId);
    } catch (err) {
      const error = new HttpError(
        'Creating job failed, please try again.',
        500
      );
      return next(error);
    }
  
    if (!user) {
      const error = new HttpError('Could not find user for provided id.', 404);
      return next(error);
    }
  
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await addedJob.save({ session: sess });
      user.jobsAdded.push(addedJob);
      await user.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      console.log(err);
      const error = new HttpError(
        'Creating job failed, please try again.',
        500
      );
      return next(error);
    }
  
    res.status(201).json({ job: addedJob });
  };

  const editJob = async (req, res, next) => {
  
    const { jobName,
      jobDescription,
      jobCategory,
      jobBudget,
      jobStartDate,
      jobCompletionTimeFrame,
      jobReqSkills, 
      jobDifficulty,
      jobCountry,
      jobCity, 
      jobAddress } = req.body;
    const jobId = req.params.jobId;
  
    let job;
    try {
      job = await Job.findById(jobId);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not find a job',
        500
      );
      return next(error);
    }

    if (job.jobOwner.toString() !== req.userData.userId) {
      return next(new HttpError('You are not allowed to edit this job.', 401));
    }
  
    job.jobName = jobName;
    job.jobDescription = jobDescription;
    job.jobCategory = jobCategory;
    job.jobBudget = jobBudget;
    job.jobStartDate = jobStartDate;
    job.jobCompletionTimeFrame = jobCompletionTimeFrame;
    job.jobReqSkills = jobReqSkills;
    job.jobDifficulty = jobDifficulty;
    job.jobCountry = jobCountry;
    job.jobCity = jobCity;
    job.jobAddress = jobAddress;
  
    try {
      await job.save();
    } catch (err) {
      const error = new HttpError('Updating job failed.', 500);
      return next(error);
    }
  
    res.status(200).json({ job: job.toObject({ getters: true }) });
  };
  
  const deleteJob = async (req, res, next) => {
    const jobId = req.params.jobId;
  
    let job;
    try {
      job = await Job.findById(jobId).populate('jobOwner');
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not delete job',
        500
      );
      return next(error);
    }
  
    if (!job) {
      return next(new HttpError('Could not find job for this id'), 404);
    }
  
    if (job.jobOwner.id !== req.userData.userId) {
      return next(
        new HttpError('You are not allowed to delete this job.', 401)
      );
    }
  
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await job.remove({ session: sess });
      job.jobOwner.jobsAdded.pull(job);
      await job.jobOwner.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not delete job',
        500
      );
      return next(error);
    }
  
    res.status(200).json({ message: 'Deleted job.' });
  };
  
exports.addJob = addJob;
exports.editJob = editJob;
exports.deleteJob = deleteJob;