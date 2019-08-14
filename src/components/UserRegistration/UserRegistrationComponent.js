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
        // if (this.props.registered) {
        //     return <Redirect to="/login" />;
        // }
        console.log(this.props);
        return (
            <div className="container">
                <div className="form-group row">
                    <img className="card-img-top rounded-circle mx-auto"
                        src={this.props.info.profileImgBase64 === null ? 
                            require('../../images/avatar5.png') : 
                            `${this.props.info.profileImgBase64}`}
                        style={{width: "6rem", height: "6rem"}}/>
                </div>
                <div className="form-group row">
                    <label for="username" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="username"
                               placeholder="Alice"
                               onChange={(event) => 
                                    this.props.userRegistrationInfoChanged({...this.props.info, username: event.target.value})}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="password" 
                           className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" 
                               className="form-control wbdv-password-fld"
                               id="password" 
                               placeholder="123qwe#$%"
                               onChange={(event) => 
                                    this.props.userRegistrationInfoChanged({...this.props.info, password: event.target.value})}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="verify-password" 
                           className="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div className="col-sm-10">
                        <input type="password" 
                               className="form-control wbdv-password-fld"
                               id="password" 
                               placeholder="123qwe#$%"
                               onChange={(event) =>
                                    this.props.userRegistrationInfoChanged({...this.props.info, verifiedPassword: event.target.value})}/>
                        <span className="text-danger" 
                             hidden={this.props.info.password === this.props.info.verifiedPassword ? true : false}>
                            Verified Password not match
                        </span>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="firstName" 
                           className="col-sm-2 col-form-label">
                        First Name </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="firstName" 
                               placeholder="Alice"
                               onChange={(event) =>
                                    this.props.userRegistrationInfoChanged({...this.props.info, firstName: event.target.value})}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="lastName" 
                           className="col-sm-2 col-form-label">
                        Last Name </label>
                    <div className="col-sm-10">
                        <input className="form-control"
                               id="lastName" 
                               placeholder="Alexander"
                               onChange={(event) =>
                                    this.props.userRegistrationInfoChanged({...this.props.info, lastName: event.target.value})}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="intro" 
                           className="col-sm-2 col-form-label">
                        Introduction </label>
                    <div className="col-sm-10">
                        <textarea className="form-control"
                                    rows="3"
                                    onChange={(event) => 
                                        this.props.userRegistrationInfoChanged({...this.props.info, intro: event.target.value})}></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="role" 
                           className="col-sm-2 col-form-label">
                        Role </label>
                    <div className="col-sm-10">
                        <select className="w-100"
                                onChange={(event) => 
                                    this.props.userRegistrationInfoChanged({...this.props.info, role: event.target.value})}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="profile" 
                           className="col-sm-2 col-form-label">
                        Profile </label>
                    <div className="col-sm-10">
                        <FileBase64 multiple={ false }
                                    onDone={ this.props.uploadImage.bind(this) } />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-primary btn-block"
                                onClick={(event) => 
                                    this.props.register(this.props.info, this.props.history)}>
                            Sign Up
                        </button>
                        <div className="row">
                            <div className="col-6">
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}