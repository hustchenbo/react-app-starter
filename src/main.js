import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
// import Raven from 'raven-js';

import 'antd/dist/antd.css';

import PageLayout from './components/PageLayout';

// add Raven for sentry
// Raven
//    .config('https://ab37e72714dc4d6483e5ea7b194e828c@sentry.io/1305937')
//    .install();

const store = createStore(rootReducer);
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


