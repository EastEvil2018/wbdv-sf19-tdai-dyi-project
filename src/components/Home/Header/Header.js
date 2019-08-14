import React from 'react';
import UserStateContainer from '../../../containers/UserState/UserStateContainer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Header = ({loggedInUser}) => {
    return (
        <Navbar bg="light" 
                expand="lg" 
                className="w-100 mx-3 align-middle bg-dark"
                sticky="top">
            <Navbar.Brand href="/home"
                          className="text-white">
                <i className="fa fa-headphones fa-lg mr-2">
                </i>
                Music For Everyone
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="user-state-component" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <li className="nav-item">
                            <a className="nav-link text-secondary" 
                            href="/search"
                            style={{fontSize: "1.2rem"}}>Search</a>
                    </li> */}
                    <Nav.Link href="/search" 
                              className="text-secondary"
                              style={{fontSize: "1.2rem"}}>Search</Nav.Link>
                </Nav>
                <Route path="/" 
                       component={UserStateContainer}/>                
            </Navbar.Collapse>
        </Navbar>
        // <nav className="navbar navbar-expand-sm navbar-light bg-dark w-100 mx-3 align-middle"
        //      style={{height: "5rem"}}>
        //     <a className="navbar-brand text-white" 
        //        href="/home"
        //        style={{fontSize: "1.5rem"}}>
        //         <i className="fa fa-headphones fa-lg mr-2">
        //         </i>
        //         Music For Everyone
        //     </a>

        //     <div className="collapse navbar-collapse justify-content-between" id="basic-navbar-nav">
        //         <Route path="/" 
        //                component={UserStateContainer}/>
        //     </div>
        // </nav>
    );
}

export default Header;