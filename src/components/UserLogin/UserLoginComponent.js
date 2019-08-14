import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Redirect } from "react-router-dom";
export default class UserLoginComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        console.log("render login");
        console.log(this.props);
        if (this.props.loggedIn)
            return <Redirect to="/home" />;
        return (
            <div className="container"
                 style={{background: "#f5f5f5"}}>
                <div className="form-group row">
                    <label for="username" className="col-sm-2 col-form-label">
                    Username </label>
                    <div className="col-sm-10">
                    <input className="form-control"
                           id="username"
                           placeholder="Alice"
                           onChange={event => this.props.usernameChanged(event.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="password" className="col-sm-2 col-form-label">
                        Password 
                    </label>
                    <div className="col-sm-10">
                    <input type="password" 
                           className="form-control wbdv-password-fld"
                           id="password" 
                           placeholder="123qwe#$%" 
                           onChange={event => this.props.passwordChanged(event.target.value)}/>
                    </div>
                </div>
                <div className="form-group row text-danger floar-right">
                    {this.props.message}
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                    <button className="btn btn-primary btn-block"
                            onClick={() => {
                                console.log(this.props);
                                this.props.login(this.props.username, this.props.password)
                            }}>
                        Sign in
                    </button>
                    <div className="row float-right">
                        <Link to="/register">Sign up</Link>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
