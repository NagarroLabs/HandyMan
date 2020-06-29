import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';

import AddJobForm from '../components/AddJobForm';

function EditJobPage(props) {
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();
    const [job, setJob] = useState({
        id: props.match.params.jobId,
        jobName: '',
        jobDescription: '',
        jobCategory: '',
        jobBudget: '',
        jobStartDate: '',
        jobCompletionTimeFrame: '',
        jobReqSkills: [],
        jobCountry: 'Romania',
        jobRegion: 'Timis',
        jobCity: 'Timisoara',
        jobAddress: '',
        jobOwner: null
    });
    let history = useHistory();

    useEffect(() => {
        async function getJobInfo() {
            try {
                const url = 'http://localhost:3001/api/jobs/' + job.id;
                const responseData = await sendRequest(url);

                let newJob = responseData.job;
                newJob.jobCompletionTimeFrame = new Date(
                    responseData.job.jobCompletionTimeFrame
                )
                    .toISOString()
                    .substring(0, 10);
                newJob.jobStartDate = new Date(responseData.job.jobStartDate)
                    .toISOString()
                    .substring(0, 10);
                setJob(newJob);
            } catch (error) {
                console.log(error);
            }
        }
        getJobInfo();
    }, [sendRequest, job.id]);

    function handleChange({ target }) {
        setJob({
            ...job,
            [target.name]: target.value
        });
    }

    async function handleEdit(event) {
        event.preventDefault();
        try {
            await sendRequest(
                `http://localhost:3001/api/jobs/edit/${job.id}`,
                'PATCH',
                JSON.stringify({
                    jobName: job.jobName,
                    jobDescription: job.jobDescription,
                    jobCategory: job.jobCategory,
                    jobBudget: job.jobBudget,
                    jobStartDate: job.jobStartDate,
                    jobCompletionTimeFrame: job.jobCompletionTimeFrame,
                    jobReqSkills: job.jobReqSkills,
                    jobCountry: job.jobCountry,
                    jobCity: job.jobCity,
                    jobAddress: job.jobAddress
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: `JWT ${auth.token}`
                }
            );
            history.push(`/jobs/${auth.userId}`);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <AddJobForm
                job={job}
                onChange={handleChange}
                onSubmit={handleEdit}
                type="edit"
            />
        </div>
    );
}

export default EditJobPage;
