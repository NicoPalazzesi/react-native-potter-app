// @flow

import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import {type TLoginStore} from './reducers/login';
import {type THousesStore} from './reducers/houses';

export type TStore = {
  login: TLoginStore,
  houses: THousesStore
};

const store = createStore(Reducers, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);
export {store, persistor}