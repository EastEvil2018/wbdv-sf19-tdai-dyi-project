import React from 'react';
import FileBase64 from 'react-file-base64';

export const SettingForm = ({settingForm, settingFormChanged, uploadImage, updateUser, show}) => {
    return (
        <div class="container" hidden={show ? false : true}>
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
                            value={settingForm.username}
                            placeholder="Alice"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="password" 
                        class="col-sm-2 col-form-label">
                    Password </label>
                <div class="col-sm-10">
                    <input type="password" 
                            class="form-control"
                            id="password" 
                            value={settingForm.password}
                            placeholder="123qwe#$%"
                            onChange={(event) => settingFormChanged({...settingForm, password: event.target.value})}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="verify-password" 
                        class="col-sm-2 col-form-label">
                    Verify Password </label>
                <div class="col-sm-10">
                    <input type="password" 
                            class="form-control"
                            id="verifiedPassword" 
                            value={settingForm.verifiedPassword}
                            placeholder="123qwe#$%"
                            onChange={(event) => settingFormChanged({...settingForm, verifiedPassword: event.target.value})}/>
                    <span class="text-danger"
                          hidden={settingForm.password === settingForm.verifiedPassword ? true : false}>
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
                            placeholder="Alice"
                            value={settingForm.firstName}
                            onChange={(event) => settingFormChanged({...settingForm, firstName: event.target.value})}/>
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
                            value={settingForm.lastName}
                            onChange={(event) => settingFormChanged({...settingForm, lastName: event.target.value})}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="profile" 
                        class="col-sm-2 col-form-label">
                    Profile </label>
                <div class="col-sm-10">
                    <FileBase64 multiple={ false }
                                onDone={ uploadImage.bind(this)} />
                </div>
            </div>
            <div class="form-group row">
                <button class="btn btn-primary btn-block mx-auto"
                        onClick={(event) => updateUser(settingForm)}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default SettingForm;