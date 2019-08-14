import React from 'react';
import {Navbar, Nav, NavDropdown, Button, Form} from 'react-bootstrap';


export default class UserStateComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if (this.props.loggedIn === false) {
            this.props.checkSession();
        }
        switch(this.props.loggedIn) {
            case true:
                return (
                    <Nav>
                        <Nav.Link className="text-white"
                                  hidden={this.props.loggedInUser.id ? false : true}
                                  style={{fontSize: "1.2rem"}}>
                            Hi, {this.props.loggedInUser.username}
                        </Nav.Link>
                        <Nav.Link href="/profile"
                                  className="text-primary"
                                  style={{fontSize: "1.1rem"}}>
                            My profile
                        </Nav.Link>     
                        <Form inline>
                            <Button className=""
                                    variant="outline-primary"
                                    onClick={(event) => this.props.logout()}>
                                Log Out
                            </Button> 
                        </Form>             
                    </Nav>
                    // <ul className="navbar-nav">
                    //     <li className="nav-item" hidden={this.props.loggedInUser.id ? false : true}>
                    //         <a className="nav-link text-white"
                    //            style={{fontSize: "1.2rem"}}>Hi, {this.props.loggedInUser.username}</a>
                    //     </li>
                    //     <li className="nav-item">
                    //         <a className="nav-link text-primary" 
                    //            href={"/profile"}
                    //            style={{fontSize: "1.1rem"}}>My profile</a>
                    //     </li>              
                    //     <li className="nav-item ml-2">
                    //         <button type="button" 
                    //                 className="btn btn-outline-primary"
                    //                 onClick={(event) => this.props.logout()}>
                    //             Log Out
                    //         </button>
                    //     </li>
                    // </ul> 
                );
            case false:
                console.log("Not Logged In");
                console.log(this.props);
                return (
                    <Nav>
                        <Form inline>
                            <Button className="mr-2"
                                    variant="outline-primary"
                                    href="/login">
                                Sign In
                            </Button>     
                            <Button className="mr-2"
                                    variant="outline-primary"
                                    href="/register">
                                Sign Up
                            </Button>                     
                        </Form>

                        {/* <Nav.Link className="btn btn-outline-primary"
                                  href="/login">
                            Sign In
                        </Nav.Link>      
                        <Nav.Link className="btn btn-outline-primary"
                                  href="/register">
                            Sign Out
                        </Nav.Link>           */}
                    </Nav>
                    // <ul className="navbar-nav">
                    //     <li className="nav-item">
                    //         <a className="btn btn-outline-primary" 
                    //            href="/login">Sign In</a>
                    //     </li>                
                    //     <li className="nav-item ml-2">
                    //         <a className="btn btn-outline-primary"
                    //            href="/register">Sign Up</a>
                    //     </li>
                    // </ul> 
                );
            default:
        }

    }
}