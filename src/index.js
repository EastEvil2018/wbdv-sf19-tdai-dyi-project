import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import UserLoginReducer from './redux/UserLogin/UserLoginReducer';
import UserRegistrationReducer from './redux/UserRegistration/UserRegistrationReducer';
import SearchReducer from './redux/Search/SearchReducer';
import DetailReducer from './redux/Detail/DetailReducer';
import UserStateReducer from './redux/UserState/UserStateReducer';
import HomeReducer from './redux/Home/HomeReducer';
import ProfileReducer from './redux/Profile/ProfileReducer';
import PlayListReducer from './redux/PlayList/PlayListReducer';
import RoutedAppContainer from './containers/RoutedAppContainer';
const combinedReducers 
    = combineReducers({UserLoginReducer, 
                       UserRegistrationReducer, 
                       SearchReducer, 
                       DetailReducer,
                       UserStateReducer,
                       HomeReducer,
                       ProfileReducer,
                       PlayListReducer});

const store = createStore(combinedReducers);
ReactDOM.render(
    <Provider store={store}>
        <RoutedAppContainer />
    </Provider>,
    document.getElementById('root')
);

