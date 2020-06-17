import React from 'react';
import JobCard from './JobCard';

export default function JobsList({ props }) {
    if (props.displayedJobs) {
        return (
            <div className="card-deck m-1 justify-content-center">
                {props.displayedJobs.map((job, index) => {
                    console.log(job);
                    return (
                        <JobCard
                            className=""
                            key={job._id}
                            id={job._id}
                            name={job.jobName}
                            description={job.jobDescription}
                            estimatedBudget={job.jobBudget}
                            specialization={job.jobCategory}
                        />
                    );
                })}
            </div>
        );
    } else {
        return <div>Loading</div>;
    }
}
