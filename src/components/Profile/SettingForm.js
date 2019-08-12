import React from 'react';
import FileBase64 from 'react-file-base64';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const SettingForm = ({loggedInUser, 
                             history,
                             settingForm, 
                             settingFormChanged, 
                             uploadImage, 
                             updateUser, 
                             show,
                             deleteAccount}) => {
    console.log("RENDER SETTING FORM : ", settingForm, show);
    const confirmOptions = {
        customUI: ({ onClose }) => {
            return (
              <div className='container'>
                <h1>Are you sure?</h1>
                <p>You want to delete this account?</p>
                <button class="btn btn-danger btn-block"
                        onClick={() => { deleteAccount(history, loggedInUser); onClose();}}>
                  Yes, Delete it!
                </button>
                <button class="btn btn-primary btn-block"
                        onClick={onClose}>
                  No
                </button>
              </div>
            );
        }
    };
    return (
        <div class="container" hidden={show ? false : true}>
            <div class="form-group row">
                <img className="card-img-top rounded-circle mx-auto"
                    src={`${settingForm.profilePhoto}`}
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
                <label for="intro" 
                        class="col-sm-2 col-form-label">
                    Introduction </label>
                <div class="col-sm-10">
                    <textarea class="form-control"
                                rows="3"
                                value={settingForm.intro}
                                onChange={(event) => 
                                    settingFormChanged({...settingForm, intro: event.target.value})}></textarea>
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
            <div class="form-group row">
                <button class="btn btn-danger btn-block mx-auto"
                        onClick={(event) => confirmAlert(confirmOptions)}>
                    Delete Account
                </button>
            </div>
        </div>
    );
}

export default SettingForm;