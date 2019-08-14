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
                             deleteAccount,
                             message}) => {
    console.log("RENDER SETTING FORM : ", settingForm, show);
    const confirmOptions = {
        customUI: ({ onClose }) => {
            return (
              <div className='container'>
                <h1>Are you sure?</h1>
                <p>You want to delete this account?</p>
                <button className="btn btn-danger btn-block"
                        onClick={() => { deleteAccount(history, loggedInUser); onClose();}}>
                  Yes, Delete it!
                </button>
                <button className="btn btn-primary btn-block"
                        onClick={onClose}>
                  No
                </button>
              </div>
            );
        }
    };
    return (
        <div className="container" hidden={show ? false : true}>
            <div className="form-group row">
                <img className="card-img-top rounded-circle mx-auto"
                    src={`${settingForm.profilePhoto}`}
                    style={{width: "6rem", height: "6rem"}}/>
            </div>
            <div className="form-group row">
                <label for="username" className="col-sm-2 col-form-label">
                    Username </label>
                <div className="col-sm-10">
                    <input className="form-control"
                            id="username"
                            readOnly
                            value={settingForm.username}
                            placeholder="Alice"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="password" 
                        className="col-sm-2 col-form-label">
                    Password </label>
                <div className="col-sm-10">
                    <input type="password" 
                            className="form-control"
                            id="password" 
                            value={settingForm.password}
                            placeholder="123qwe#$%"
                            onChange={(event) => settingFormChanged({...settingForm, password: event.target.value})}/>
                </div>
            </div>
            <div className="form-group row">
                <label for="verify-password" 
                        className="col-sm-2 col-form-label">
                    Verify Password </label>
                <div className="col-sm-10">
                    <input type="password" 
                            className="form-control"
                            id="verifiedPassword" 
                            value={settingForm.verifiedPassword}
                            placeholder="123qwe#$%"
                            onChange={(event) => settingFormChanged({...settingForm, verifiedPassword: event.target.value})}/>
                    <span className="text-danger"
                          hidden={settingForm.password === settingForm.verifiedPassword ? true : false}>
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
                            value={settingForm.firstName}
                            onChange={(event) => settingFormChanged({...settingForm, firstName: event.target.value})}/>
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
                            value={settingForm.lastName}
                            onChange={(event) => settingFormChanged({...settingForm, lastName: event.target.value})}/>
                </div>
            </div>
            <div className="form-group row">
                <label for="intro" 
                        className="col-sm-2 col-form-label">
                    Introduction </label>
                <div className="col-sm-10">
                    <textarea className="form-control"
                                rows="3"
                                value={settingForm.intro}
                                onChange={(event) => 
                                    settingFormChanged({...settingForm, intro: event.target.value})}></textarea>
                </div>
            </div>
            <div className="form-group row">
                <label for="profile" 
                        className="col-sm-2 col-form-label">
                    Profile </label>
                <div className="col-sm-10">
                    <FileBase64 multiple={ false }
                                onDone={ uploadImage.bind(this)} />
                </div>
            </div>
            <div className="form-group row text-danger floar-right">
                    {message}
            </div>
            <div className="form-group row">
                <button className="btn btn-primary btn-block mx-auto"
                        onClick={(event) => updateUser(history, settingForm)}>
                    Submit
                </button>
            </div>
            <div className="form-group row">
                <button className="btn btn-danger btn-block mx-auto"
                        onClick={(event) => confirmAlert(confirmOptions)}>
                    Delete Account
                </button>
            </div>
        </div>
    );
}

export default SettingForm;