// @flow

import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import {type TLoginStore} from './reducers/login';

export type TStore = {
  login: TLoginStore
};

export const store = createStore(Reducers, applyMiddleware(ReduxThunk));