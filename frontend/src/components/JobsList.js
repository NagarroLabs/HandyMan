import React from 'react';
import JobCard from './JobCard';

export default function JobsList({ props }) {
  if (props.displayedJobs) {
    return (
      <>
        {props.displayedJobs.map((job, index) => {
          return (
            <JobCard
              className=''
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
  } else {
    return <div>Loading</div>;
  }
}
