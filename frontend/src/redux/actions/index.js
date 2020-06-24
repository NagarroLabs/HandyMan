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
    let response;
    try {
        response = await sendRequest(
            'http://localhost:3001/api/jobs/myjobs/' + userId
        );
    } catch (err) {
        console.log(err);
    }
    dispatch({ type: 'GET_USER_JOBS', payload: response });
};
