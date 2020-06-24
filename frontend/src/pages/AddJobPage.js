import React, { useContext, useState } from 'react';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';
import AddJobForm from '../components/AddJobForm';

export default function AddJobPage() {
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();
    const [job, setJob] = useState({
        id: null,
        jobName: '',
        jobDescription: '',
        jobCategory: '',
        jobBudget: '',
        jobStartDate: '',
        jobCompletionFrame: '',
        jobReqSkills: [],
        jobCountry: 'Romania',
        jobRegion: '',
        jobCity: 'Timisoara',
        jobAddress: '',
        jobOwner: null,
    });

    function handleChange({ target }) {
        setJob({
            ...job,
            [target.name]: target.value,
        });
    }

    function getData({
        country,
        region,
        jobStartDate,
        jobCompletionTimeFrame,
        skillList,
    }) {
        setJob({
            ...job,
            jobCountry: country,
            jobRegion: region,
            jobStartDate: jobStartDate,
            jobCompletionFrame: jobCompletionTimeFrame,
            jobReqSkills: skillList,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(job);
        try {
            const responseData = await sendRequest(
                'http://localhost:3001/api/jobs/new',
                'POST',
                JSON.stringify({
                    jobName: job.jobName,
                    jobDescription: job.jobDescription,
                    jobCategory: job.jobCategory,
                    jobBudget: job.jobBudget,
                    jobStartDate: job.jobStartDate,
                    jobCompletionTimeFrame: job.jobCompletionFrame,
                    jobReqSkills: job.jobReqSkills,
                    jobCountry: job.jobCountry,
                    jobCity: job.jobCity,
                    jobAddress: job.jobAddress,
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: `JWT ${auth.token}`,
                }
            );
            console.log(responseData);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <AddJobForm
                job={job}
                onChange={handleChange}
                onSubmit={handleSubmit}
                sendData={getData}
            />
        </div>
    );
}
