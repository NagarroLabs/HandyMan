export default (state = [], action) => {
    if (action.type === 'GET_JOBS') {
        return action.payload.jobs;
    }
    return state;
};
