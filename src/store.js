import {createStore} from 'redux';
import { combineReducers } from 'redux';
import TodoReducers from './reducers/todoReducers';

const rootReducer = combineReducers(
    {
      Todo:TodoReducers,
      
    }
);

const store = createStore(
    rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;