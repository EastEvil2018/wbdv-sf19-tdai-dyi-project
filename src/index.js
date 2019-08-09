import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import UserLoginReducer from './redux/UserLogin/UserLoginReducer';
import UserRegistrationReducer from './redux/UserRegistration/UserRegistrationReducer';
import RoutedApp from './RoutedApp';
import SearchReducer from './redux/Search/SearchReducer';
import DetailReducer from './redux/Detail/DetailReducer';
const combinedReducers = combineReducers({UserLoginReducer, UserRegistrationReducer, SearchReducer, DetailReducer}); 

const store = createStore(combinedReducers);
ReactDOM.render(
    <Provider store={store}>
        <RoutedApp/>
    </Provider>,
    document.getElementById('root')
);

