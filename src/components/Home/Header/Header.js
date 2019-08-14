import React from 'react';
import UserStateContainer from '../../../containers/UserState/UserStateContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const Header = ({loggedInUser}) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-dark w-100 mx-3 align-middle"
             style={{height: "5rem"}}>
            <a className="navbar-brand text-white" 
               href="/home"
               style={{fontSize: "1.5rem"}}>
                <i className="fa fa-headphones fa-lg mr-2">
                </i>
                Music For Everyone
            </a>
            <div className="collapse navbar-collapse justify-content-between">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-secondary" 
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