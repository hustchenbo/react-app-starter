import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import 'antd/dist/antd.css';

import PageLayout from './components/PageLayout';


const store = createStore(rootReducer);
render(
    <Provider store={store}>
        <PageLayout/>
    </Provider>,
    document.getElementById('react-app')
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}






