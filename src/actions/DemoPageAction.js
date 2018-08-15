/**
 * @file Action for demo page
 * @author chenbo09
 */
import _ from 'lodash';
import axios from 'axios';
import * as CONST from '../constants/ActionTypes';
import api from './api';

const defaultQuery = {page: 1, pageSize: 10};

export function getDemoList(query) {
    query = _.extend({}, defaultQuery, query);
    return async (dispatch, getState) => {
        const response = await axios.post(api.getDemoList, query);
        if (response.data.success === true) {
            dispatch({
                type: CONST.GET_DEMO_LIST,
                demoList: response.data.page
            });
        }
        else {
            throw new Error('获取失败');
        }
    };
}

// 因为删除马上同步给服务器，同时本地会重新刷新列表，所以没有改动store

export function deleteUser(param) {
    return async (dispatch, getState) => {
        const response = await axios.post(api.deleteUser, param);
        if (response.data.success === true) {
        }
        else {
            throw new Error('删除错误');
        }
    };
}
