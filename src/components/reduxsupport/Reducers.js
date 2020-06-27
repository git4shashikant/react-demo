import { combineReducers } from 'redux';
import { toggleReducer } from './toggle/ToggleReducer';
import { counterReducer } from './counter/CounterReducer';

export default combineReducers({
    toggleReducer,
    counterReducer
});