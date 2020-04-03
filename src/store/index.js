import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
   };

const pReducer=persistReducer(persistConfig,rootReducer)
export const store =createStore(pReducer,{},applyMiddleware(thunk,logger));
export const persistor = persistStore(store);

// export default store;
