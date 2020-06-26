import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const store = createStore(reducers, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default { store, persistor };
