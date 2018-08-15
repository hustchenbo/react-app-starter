/**
 * @file reducers/demoList
 * @author chenbo09
 */

import {GET_DEMO_LIST} from '../constants/ActionTypes';

const demoList = (state = {count: 0, totalCount: []}, action) => {
    switch (action.type) {
        case GET_DEMO_LIST:
            return action.demoList;
        default:
            return state;
    }
};

export default demoList;
