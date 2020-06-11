import React from 'react';
import JobCard from './JobCard';

export default function JobsList({ props }) {
  if (props.displayedJobs) {
    return (
      <div className="card-deck m-1 justify-content-center">
        {props.displayedJobs.map((job, index) => {
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
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
