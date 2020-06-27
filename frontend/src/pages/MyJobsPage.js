import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';
import { getUserJobs } from '../redux/actions';
import { connect } from 'react-redux';

import JobList from '../components/JobsList';

function MyJobsPage(props) {
    const { sendRequest } = useHttpClient();
    const auth = useContext(AuthContext);

    useEffect(() => {
        props.getUserJobs(sendRequest, auth.userId);
    }, []);

    async function deleteJob(event) {
        event.preventDefault();
        try {
            const url = `http://localhost:3001/api/jobs/delete/${event.target.value}`;
            await sendRequest(url, 'DELETE', null, {
                'Content-Type': 'application/json',
                Authorization: 'JWT ' + auth.token
            });
            props.getUserJobs(sendRequest, auth.userId);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="mx-auto w-75">
            <JobList
                props={{
                    displayedJobs: props.jobs,
                    type: 'edit',
                    deleteJob
                }}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return { jobs: state.userJobs };
};

export default connect(mapStateToProps, { getUserJobs })(MyJobsPage);
