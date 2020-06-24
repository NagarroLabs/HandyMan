import React, { useContext, useState, useEffect } from 'react';
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
        jobCompletionFrame: '',
        jobReqSkills: [],
        jobCountry: 'Romania',
        jobRegion: 'Timis',
        jobCity: 'Timisoara',
        jobAddress: '',
        jobOwner: null
    });

    useEffect(() => {
        async function getJobInfo() {
            try {
                const url = 'http://localhost:3001/api/jobs/' + job.id;
                const responseData = await sendRequest(url);
                setJob(responseData.job);
            } catch (error) {
                console.log(error);
            }
        }
        getJobInfo();
    }, [sendRequest, props.jobId]);

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
                    jobCompletionTimeFrame: job.jobCompletionFrame,
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
