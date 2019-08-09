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
                        <li class="nav-item">
                            <a class="nav-link text-primary" 
                               href={"/profile/" + this.props.id }>My profile</a>
                        </li>              
                        <li class="nav-item">
                            <a class="nav-link text-primary" 
                               href={"/home"}
                               onClick={(event) => this.props.logOut()}>Log Out</a>
                        </li>
                    </ul> 
                );
            case false:
                console.log("Not Logged In");
                console.log(this.props);
                return (
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link text-primary" 
                               href="/login">Sign In</a>
                        </li>                
                        <li class="nav-item">
                            <a class="nav-link text-primary"
                               href="/register"
                               onClick={(event) => alert("Click Sign Up")}>Sign Up</a>
                        </li>
                    </ul> 
                );
            default:
        }

    }
}