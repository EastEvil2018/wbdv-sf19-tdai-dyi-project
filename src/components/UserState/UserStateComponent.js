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
                               href={"/profile/" + this.props.loggedInUser.id }>My profile</a>
                        </li>              
                        <li class="nav-item ml-2">
                            <button type="button" 
                                    class="btn btn-primary"
                                    onClick={(event) => this.props.logOut()}>
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