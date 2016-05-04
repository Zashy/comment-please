import { combineReducers } from 'redux';
import * as sections from './sections';

const rootReducer = combineReducers({
    ...sections
});

export default rootReducer;
