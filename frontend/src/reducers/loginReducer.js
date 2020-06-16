export default (state = false, action) => {
    if (action.type === 'SET_LOGGEDIN') {
        return action.payload;
    }
    return state;
};
