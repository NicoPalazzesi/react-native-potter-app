// @flow

import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import {type TLoginStore} from './reducers/login';
import {type THousesStore} from './reducers/houses';
import {type TSpellsStore} from './reducers/spells';

export type TStore = {
  login: TLoginStore,
  houses: THousesStore,
  spells: TSpellsStore
};

const store = createStore(Reducers, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);
export {store, persistor}