import React from 'react';
import UserStateContainer from '../../../containers/UserState/UserStateContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Header = ({}) => {
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light w-100">
            <a class="navbar-brand" href="/home">Home</a>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/search">Search</a>
                    </li>
                </ul>
                <Route path="/" 
                       component={UserStateContainer}/>
            </div>
        </nav>
    );
}

export default Header;