import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import Raven from 'raven-js';

import 'antd/dist/antd.css';

import PageLayout from './components/PageLayout';

// add Raven for sentry
// Raven
//    .config('https://ab37e72714dc4d6483e5ea7b194e828c@sentry.io/1335937')
//    .install();

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <PageLayout />
    </Provider>,
    document.getElementById('react-app')
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}
