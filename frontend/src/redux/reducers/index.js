import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import jobReducer from './jobReducer';
import loginReducer from './loginReducer';
import userJobsReducer from './userJobsReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['jobs', 'isLoggedIn']
};

export default persistReducer(
    persistConfig,
    combineReducers({
        jobs: jobReducer,
        isLoggedIn: loginReducer,
        userJobs: userJobsReducer
    })
);
