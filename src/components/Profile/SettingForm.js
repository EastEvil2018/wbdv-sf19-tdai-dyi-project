import React from 'react';
import FileBase64 from 'react-file-base64';

export default class SettingForm extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div class="form-group row">
                    <img className="card-img-top rounded-circle mx-auto"
                        src={require('../../images/avatar5.png')}
                        style={{width: "6rem", height: "6rem"}}/>
                </div>
                <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">
                        Username </label>
                    <div class="col-sm-10">
                        <input class="form-control"
                               id="username"
                               readOnly
                               placeholder="Alice"/>
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
                               placeholder="123qwe#$%"/>
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
                               placeholder="123qwe#$%"/>
                        <span class="text-danger">
                            Verified Password not match
                        </span>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="firstName" 
                           class="col-sm-2 col-form-label">
                        First Name </label>
                    <div class="col-sm-10">
                        <input class="form-control"
                               id="firstName" 
                               placeholder="Alice"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="lastName" 
                           class="col-sm-2 col-form-label">
                        Last Name </label>
                    <div class="col-sm-10">
                        <input class="form-control"
                               id="lastName" 
                               placeholder="Alexander"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="profile" 
                           class="col-sm-2 col-form-label">
                        Profile </label>
                    <div class="col-sm-10">
                        <FileBase64 multiple={ false }/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                        <button class="btn btn-primary btn-block">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}