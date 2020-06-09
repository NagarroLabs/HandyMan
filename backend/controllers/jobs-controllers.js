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
  
exports.addJob = addJob;