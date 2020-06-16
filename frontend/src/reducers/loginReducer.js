export default (state = false, action) => {
    console.log(state + ' ' + action.type + ' ' + action.payload);
    if (action.type === 'SET_LOGGEDIN') {
        return action.payload;
    }
    return state;
};
