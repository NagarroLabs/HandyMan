import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';
import { getUserJobs } from '../redux/actions';
import { connect } from 'react-redux';

function EditJobPage(props) {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    useEffect(() => {
        console.log(auth);
        props.getUserJobs(sendRequest, auth.userId);
    }, []);
    return <div>User jobs</div>;
}

const mapStateToProps = (state) => {
    return { jobs: state.jobs };
};

export default connect(mapStateToProps, { getUserJobs })(EditJobPage);
