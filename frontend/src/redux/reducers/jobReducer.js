export default (state = [], action) => {
    if (action.type === 'GET_JOBS') {
        return action.payload.jobs;
    }
    if (action.type === 'SET_LOGGEDIN') {
        if (!action.payload) {
            return [];
        }
    }
    return state;
};
