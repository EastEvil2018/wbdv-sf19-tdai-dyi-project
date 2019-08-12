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
                    <ul class="navbar-nav">
                        <li class="nav-item" hidden={this.props.loggedInUser.id ? false : true}>
                            <a class="nav-link text-white"
                               style={{fontSize: "1.2rem"}}>Hi, {this.props.loggedInUser.username}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-primary" 
                               href={"/profile/" + this.props.loggedInUser.id }
                               style={{fontSize: "1.1rem"}}>My profile</a>
                        </li>              
                        <li class="nav-item ml-2">
                            <button type="button" 
                                    class="btn btn-outline-primary"
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
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="btn btn-primary" 
                               href="/login">Sign In</a>
                        </li>                
                        <li class="nav-item ml-2">
                            <a class="btn btn-primary"
                               href="/register">Sign Up</a>
                        </li>
                    </ul> 
                );
            default:
        }

    }
}