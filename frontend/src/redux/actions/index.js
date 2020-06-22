export const getJobs = (sendRequest) => async (dispatch) => {
    const response = await sendRequest(
        'http://localhost:3001/api/jobs',
        'GET',
        null,
        {
            'Content-Type': 'application/json'
        }
    );
    dispatch({ type: 'GET_JOBS', payload: response });
};

export const setLoggedIn = (logged) => {
    return {
        type: 'SET_LOGGEDIN',
        payload: logged
    };
};

export const getUserJobs = (sendRequest, userId) => async (dispatch) => {
    console.log(userId);
    const response = await sendRequest(
        'http://localhost:3001/api/jobs/myjobs/' + userId
    );
    console.log(response);
    dispatch({ type: 'GET_USER_JOBS', payload: response });
};
