import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Details from './components/tools/Details';
import Form from './components/tools/Form';
import rootReducer from './reducers';
import history from './utils/history';

import 'semantic-ui-css/semantic.min.css';

const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(reduxThunk)),
);
const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/tools/add" component={Form} />
                <Route exact path="/tools/:id" component={Details} />
                <Route exact path="/tools/:id/edit" component={Form} />
            </Switch>
        </Router>
    </Provider>,
    rootElement
);
