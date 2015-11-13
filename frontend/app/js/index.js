import 'phantomjs-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute } from 'react-router';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {
    ReduxRouter,
    reduxReactRouter,
    pushState
} from 'redux-router';
import { createHistory } from 'history';

import App from './containers/app';
import Home from './components/home';
import NewProject from './containers/new_project';
import reducers from './reducers';

const store = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactRouter({ createHistory }),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducers);

render((
    <Provider store={store} key="provider">
        <ReduxRouter>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="projects/new" component={NewProject}/>
            </Route>
        </ReduxRouter>
    </Provider>
), document.getElementById("root"));
