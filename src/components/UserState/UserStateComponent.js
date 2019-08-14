import React from 'react';


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
                    <ul className="navbar-nav">
                        <li className="nav-item" hidden={this.props.loggedInUser.id ? false : true}>
                            <a className="nav-link text-white"
                               style={{fontSize: "1.2rem"}}>Hi, {this.props.loggedInUser.username}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" 
                               href={"/profile/" + this.props.loggedInUser.id }
                               style={{fontSize: "1.1rem"}}>My profile</a>
                        </li>              
                        <li className="nav-item ml-2">
                            <button type="button" 
                                    className="btn btn-outline-primary"
                                    onClick={(event) => this.props.logout()}>
                                Log Out
                            </button>
                        </li>
                    </ul> 
                );
            case false:
                console.log("Not Logged In");
                console.log(this.props);
                return (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="btn btn-outline-primary" 
                               href="/login">Sign In</a>
                        </li>                
                        <li className="nav-item ml-2">
                            <a className="btn btn-outline-primary"
                               href="/register">Sign Up</a>
                        </li>
                    </ul> 
                );
            default:
        }

    }
}