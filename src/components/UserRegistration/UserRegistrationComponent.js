import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import FileBase64 from 'react-file-base64';

export default class UserRegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render(){
        if (this.props.registered)
            return <Redirect to="/home" />;
        console.log(this.props);
        return (
            <div>
                <div class="form-group row">
                    <img className="card-img-top rounded-circle mx-auto"
                        src={this.props.info.profileImgBase64 === null ? 
                            require('../../images/avatar5.png') : 
                            `${this.props.info.profileImgBase64}`}
                        style={{width: "6rem", height: "6rem"}}/>
                </div>
                <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">
                        Username </label>
                    <div class="col-sm-10">
                        <input class="form-control"
                               id="username"
                               placeholder="Alice"
                               onChange={(event) => 
                                    this.props.userRegistrationInfoChanged({...this.props.info, username: event.target.value})}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" 
                           class="col-sm-2 col-form-label">
                        Password </label>
                    <div class="col-sm-10">
                        <input type="password" 
                               class="form-control wbdv-password-fld"
                               id="password" 
                               placeholder="123qwe#$%"
                               onChange={(event) => 
                                    this.props.userRegistrationInfoChanged({...this.props.info, password: event.target.value})}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="verify-password" 
                           class="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div class="col-sm-10">
                        <input type="password" 
                               class="form-control wbdv-password-fld"
                               id="password" 
                               placeholder="123qwe#$%"
                               onChange={(event) =>
                                    this.props.userRegistrationInfoChanged({...this.props.info, verifiedPassword: event.target.value})}/>
                    </div>
                </div>
                <div class="form-group row text-danger" 
                     hidden={this.props.info.password === this.props.info.verifiedPassword ? true : false}>
                    Verified Password not match
                </div>
                <div class="form-group row">
                    <label for="firstName" 
                           class="col-sm-2 col-form-label">
                        First Name </label>
                    <div class="col-sm-10">
                        <input class="form-control"
                               id="firstName" 
                               placeholder="Alice"
                               onChange={(event) =>
                                    this.props.userRegistrationInfoChanged({...this.props.info, firstName: event.target.value})}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="lastName" 
                           class="col-sm-2 col-form-label">
                        Last Name </label>
                    <div class="col-sm-10">
                        <input class="form-control"
                               id="lastName" 
                               placeholder="Alexander"
                               onChange={(event) =>
                                    this.props.userRegistrationInfoChanged({...this.props.info, lastName: event.target.value})}/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="profile" 
                           class="col-sm-2 col-form-label">
                        Profile </label>
                    <div class="col-sm-10">
                        <FileBase64 multiple={ false }
                                    onDone={ this.props.uploadImage.bind(this) } />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                        <button class="btn btn-primary btn-block"
                                onClick={(event) => 
                                    this.props.register(this.props.info)}>
                            Sign Up
                        </button>
                        <div class="row">
                        <div class="col-6">
                            <Link to="/login">Login</Link>
                        </div>
                        <div class="col-6">
                            <a href="#" class="float-right">Cancel</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}