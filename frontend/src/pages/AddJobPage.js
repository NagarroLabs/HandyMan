import React, { useContext, useState } from 'react';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';
import AddJobForm from '../components/AddJobForm';

export default function AddJobPage() {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [job, setJob] = useState({
        id: null,
        jobName: '',
        jobDescription: '',
        jobCategory: '',
        jobBudget: '',
        jobStartDate: '',
        jobCompletionFrame: '',
        jobReqSkills: [],
        jobCountry: '',
        jobCity: '',
        jobAddress: '',
        jobOwner: null,
    });
    console.log(job);

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
            jobCity: region,
            jobStartDate: jobStartDate,
            jobCompletionFrame: jobCompletionTimeFrame,
            jobReqSkills: skillList,
        });
    }

    console.log(job);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const responseData = await sendRequest(
                'http://localhost:3001/api/jobs',
                'POST',
                JSON.stringify({
                    jobName: job.jobName,
                    jobDescription: job.jobDescription,
                    jobCategory: job.jobCategory,
                    jobBudget: job.jobBudget,
                    jobStartDate: job.jobStartDate,
                    jobCompletionFrame: job.jobCompletionFrame,
                    jobReqSkills: job.jobReqSkills,
                    jobCountry: job.jobCountry,
                    jobCity: job.jobCity,
                    jobAddress: job.jobAddress,
                    jobOwner: auth.userId,
                }),
                {
                    'Content-Type': 'application/json',
                }
            );
        } catch (err) {}
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
