import React from 'react';

export default class SettingForm extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">
                    Username </label>
                    <div class="col-sm-10">
                    <input class="form-control"
                           id="username"
                           placeholder="Alice"/>
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
                           placeholder="123qwe#$%"/>
                    </div>
                </div>
                <div class="form-group row text-danger floar-right">
                    Not match
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