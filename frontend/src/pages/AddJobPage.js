import React, { useContext, useState } from 'react';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';
import AddJobForm from '../components/AddJobForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

toast.configure();

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
        jobCompletionTimeFrame: '',
        jobReqSkills: [],
        jobCountry: 'Romania',
        jobRegion: 'Timis',
        jobCity: 'Timisoara',
        jobAddress: '',
        jobOwner: null
    });

    let history = useHistory();
    function handleChange({ target }) {
        if (target.name === 'jobReqSkills') {
            setJob({
                ...job,
                [target.name]: [...job.jobReqSkills, target.value]
            });
        } else {
            setJob({
                ...job,
                [target.name]: target.value
            });
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await sendRequest(
                'http://localhost:3001/api/jobs/new',
                'POST',
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
            toast.success('Job added successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
            history.push('/jobs');
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
                type="add"
            />
        </div>
    );
}
