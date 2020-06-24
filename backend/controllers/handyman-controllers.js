const mongoose = require('mongoose');

const HttpError = require("../models/http-error");
const HandyMan = require("../models/handyMan");
const User = require("../models/users");
const Job = require("../models/jobs");

const upgradeToHandyMan = async (req, res, next) => {
  const {
    areaOfInterest,
    skills,
    spokenLanguages,
    city,
    country,
    address,
    companyName,
    companyAddress,
    companyWebsite,
    companyPhone,
    experience,
  } = req.body;

  const { userId } = req.userData;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not find a user to upgrade.", 500)
    );
  }

  const createdHandyMan = new HandyMan({
    info: userId,
    areaOfInterest,
    skills,
    spokenLanguages,
    city,
    country,
    address,
    companyName,
    companyAddress,
    companyWebsite,
    companyPhone,
    experience,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdHandyMan.save({session: sess });
    user.handyManId = createdHandyMan;
    await user.save({ session: sess});
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Upgrading to HandyMan failed.", 500);
    return next(error);
  }

  res.status(201).json({
    handyManId: createdHandyMan.id,
  });
};

const applyForJob = async (req,res,next) => {

  const { userId } = req.userData;
  const { jobId } = req.params;

  let user;
  try {
    user = await User.findById(userId).populate("handyManId");
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not find the user that wishes to apply.", 500)
    );
  }

  let job;
  try {
      job = await Job.findById(jobId);
  } catch (err) {
      return next(
          new HttpError('Something went wrong, could not find job.'),
          500
      );
  }

  if (!job) {
    return next(
          new HttpError('Could not find job with the provided id', 404)
    );
  }

  //Checking if the handyManId key exists in the current User

  if(user.handyManId === undefined){
    return next(
      new HttpError("This user has not yet upgraded to HandyMan", 404)
    );
  }

  for (const applicant of job.jobApplicants){
      if(applicant.toString() === user.handyManId.id){
        return next(
          new HttpError("Cannot enlist twice to the same job.", 500)
        );
      }
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    job.jobApplicants.push(user.handyManId)
    await job.save({session: sess });
    user.handyManId.jobsEnlistedTo.push(job);
    await user.handyManId.save({ session: sess});
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Applying for the job failed.", 500);
    return next(error);
  }

  res.status(201).json("Successfully applied for the job.");
  
}

exports.upgradeToHandyMan = upgradeToHandyMan;
exports.applyForJob = applyForJob;
