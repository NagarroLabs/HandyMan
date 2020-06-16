import _ from 'lodash';

export const getJobs = (sendRequest) => async (dispatch) => {
    const response = await sendRequest(
        'http://localhost:3001/api/jobs',
        'GET',
        null,
        {
            'Content-Type': 'application/json',
        }
    );
    dispatch({ type: 'GET_JOBS', payload: response });
};

export const setLoggedIn = (logged) => {
    console.log('--' + logged);
    return {
        type: 'SET_LOGGEDIN',
        payload: logged,
    };
};
