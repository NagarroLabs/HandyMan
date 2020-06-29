import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewDetailsAboutJobForm(props) {
    return (
        <>
            <div className="ViewJobPage">
                <h1>{props.job.jobName}</h1>
                <p>Category: {props.job.jobCategory}</p>
                <h2>Budget: {props.job.jobBudget}</h2>
                <br />
                <h5>What is this job about?</h5>
                <p> {props.job.jobDescription}</p>
                <br />
                <h5>When?</h5>
                <p>Start date: {props.job.jobStartDate}</p>
                <p>Completion frame: {props.job.jobCompletionTimeFrame}</p>
                <br />
                <h5>Where?</h5>
                <p>{props.job.jobAddress}</p>
                <br />
                <h5>What skills does the job require?</h5>
                <p>{props.job.jobReqSkills}</p>

                <button className="btn-sec text-light">Apply for job</button>
            </div>
        </>
    );
}

export default ViewDetailsAboutJobForm;
