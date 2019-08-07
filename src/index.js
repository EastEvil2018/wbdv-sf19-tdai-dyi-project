import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import UserLoginReducer from './redux/login/UserLoginReducer';
import UserRegistrationReducer from './redux/UserRegistration/UserRegistrationReducer'
import RoutedApp from './RoutedApp';
const combinedReducers = combineReducers({UserLoginReducer, UserRegistrationReducer});

const store = createStore(combinedReducers);
ReactDOM.render(
    <Provider store={store}>
        <RoutedApp/>
    </Provider>,
    document.getElementById('root')
);

