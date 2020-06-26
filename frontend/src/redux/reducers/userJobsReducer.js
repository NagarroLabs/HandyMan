export default (state = [], action) => {
    if (action.type === 'GET_USER_JOBS') {
        if (action.payload) return action.payload.jobs;
        else return state;
    }
    return state;
};
