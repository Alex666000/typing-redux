import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReduser} from './redusers';

// здесь передаем все имеющиеся в других папках редюссеры:
export const store = createStore (rootReduser, applyMiddleware(thunk))