import React from "react";
import JobCard from "./JobCard";

const JobsList = ({ jobs }) => {
  return (
    <>
      {jobs.map((job, index) => {
        return (
          <JobCard
            className=""
            key={index}
            id={job.id}
            name={job.name}
            description={job.description}
            estimatedBudget={job.estimatedBudget}
            specialization={job.category}
          />
        );
      })}
    </>
  );
};

export default JobsList;
