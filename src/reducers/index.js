import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import demoList from './demoList';

export default combineReducers({
    todos,
    visibilityFilter,
    demoList
});
