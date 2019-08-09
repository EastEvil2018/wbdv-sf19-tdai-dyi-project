import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ProfileComponent from './components/Profile/ProfileComponent';
import UserLoginContainer from './containers/UserLogin/UserLoginContainer';
import UserRegistrationContainer from './containers/UserRegistration/UserRegistrationContainer';
import HomeComponent from './components/Home/HomeComponent';
import Header from './components/Home/Header/Header';
import SearchContainer from './containers/Search/SearchContainer';
import DetailContainer from './containers/Detail/DetailContainer';
import HomeContainer from './containers/Home/HomeContainer';
export default class RoutedApp extends React.Component {
    render() {
        return (
            <Router>
                <div className="container p-0">
                    <div className="row mb-2">                
                        <Header></Header>
                    </div>
                    <Route path="/"
                           exact={true}
                           component={HomeContainer}/>
                    <Route exact={true}
                           path="/search"
                           component={SearchContainer}/>
                    <Route exact={true}
                           path="/login"
                           component={UserLoginContainer}/>
                    <Route path="/profile"
                           component={ProfileComponent}/>
                    <Route path="/details"
                           component={DetailContainer}/>
                    <Route exact = {true}
                           path="/register"
                           component={UserRegistrationContainer}/>
                    <Route exact = {true}
                           path="/home" 
                           component={HomeContainer}/>
                </div>
            </Router>
        )
    }
}