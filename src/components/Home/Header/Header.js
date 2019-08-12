import React from 'react';
import UserStateContainer from '../../../containers/UserState/UserStateContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Header = ({loggedInUser}) => {
    return (
        <nav class="navbar navbar-expand navbar-light bg-dark w-100 mx-3 align-middle"
             style={{height: "5rem"}}>
            <a class="navbar-brand text-white" 
               href="/home"
               style={{fontSize: "1.5rem"}}>
                <i class="fa fa-headphones fa-lg mr-2">
                </i>
                Music For Everyone
            </a>
            <div class="collapse navbar-collapse justify-content-between">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-secondary" 
                           href="/search"
                           style={{fontSize: "1.2rem"}}>Search</a>
                    </li>
                </ul>
                <Route path="/" 
                       component={UserStateContainer}/>
            </div>
        </nav>
    );
}

export default Header;