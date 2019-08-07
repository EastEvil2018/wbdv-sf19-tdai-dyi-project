import React from 'react';
import UserService from '../../services/user/UserService';
import { WebUtils } from '../../utils/WebUtils';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Redirect } from "react-router-dom";
export default class UserLoginComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log("render login");
        if (this.props.loggedIn)
            return <Redirect to="/profile" />;
        return (
            <div>
                <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">
                    Username </label>
                    <div class="col-sm-10">
                    <input class="form-control"
                           id="username"
                           placeholder="Alice"
                           onChange={event => this.props.usernameChanged(event.target.value)} />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-sm-2 col-form-label">
                        Password 
                    </label>
                    <div class="col-sm-10">
                    <input type="password" 
                           class="form-control wbdv-password-fld"
                           id="password" 
                           placeholder="123qwe#$%" 
                           onChange={event => this.props.passwordChanged(event.target.value)}/>
                    </div>
                </div>
                <div class="form-group row text-danger floar-right">
                    {this.props.message}
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                    <button class="btn btn-primary btn-block"
                            onClick={() => {
                                console.log(this.props);
                                this.props.login(this.props.username, this.props.password)
                            }}>
                        Sign in
                    </button>
                    <div class="row float-right">
                        <Link to="/register">Sign up</Link>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
