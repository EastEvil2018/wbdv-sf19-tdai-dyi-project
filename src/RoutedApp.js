import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchComponent from './components/Search/SearchComponent';
import ProfileComponent from './components/Profile/ProfileComponent';
import UserLoginContainer from './containers/UserLogin/UserLoginContainer';
import UserRegistrationContainer from './containers/UserRegistration/UserRegistrationContainer';
import HomeComponent from './components/Home/HomeComponent';
import Header from './components/Home/Header/Header';
export default class RoutedApp extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row mb-2">                
                        <Header></Header>
                    </div>
                    <Route path="/"
                           exact={true}
                           component={HomeComponent}/>
                    <Route exact={true}
                           path="/spotify"
                           component={SearchComponent}/>
                    <Route exact={true}
                           path="/login"
                           component={UserLoginContainer}/>
                    <Route path="/profile"
                           component={ProfileComponent}/>
                    <Route exact = {true}
                           path="/register"
                           component={UserRegistrationContainer}/>
                    <Route exact = {true}
                           path="/home" 
                           component={HomeComponent}/>
                </div>
            </Router>
        )
    }
}