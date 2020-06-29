import React, { useState, useEffect } from 'react';
// import { AuthContext } from '../shared/context/auth-context';

import { useHttpClient } from '../shared/hooks/http-hook';
import ViewDetailsAboutJobForm from '../components/ViewDetailsAboutJobForm';

function ViewDetailsAboutJobPage(props) {
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
        jobCountry: '',
        jobRegion: '',
        jobCity: '',
        jobAddress: '',
        jobOwner: null
    });

    // const auth = useContext(AuthContext);
    // const userId = auth.userId;

    useEffect(() => {
        async function getJobById() {
            try {
                const url = 'http://localhost:3001/api/jobs/' + job.id;
                const responseData = await sendRequest(url);
                setJob(responseData.job);
            } catch (err) {}
        }

        getJobById();
    }, []);

    return (
        <>
            <ViewDetailsAboutJobForm job={job} />
        </>
    );
}

export default ViewDetailsAboutJobPage;
