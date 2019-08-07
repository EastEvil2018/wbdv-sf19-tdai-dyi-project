import UserRegistrationComponent from "../../components/UserRegistration/UserRegistrationComponent";
import { connect } from 'react-redux';

const stateToPropsMapper = state => ({
    ...state.UserRegistrationReducer
})

const propsToDispatcher = dispatch => ({
    userRegistrationInfoChanged: (info) => {
        console.log("userRegistrationInfoChanged");
        dispatch({
            "type": "REGISTRATION_INFO_CHANGED",
            registrationInfo: info
        });
    },
    register: (info) => {
        if (info.password !== info.verifiedPassword) {
            return;
        }
        console.log("Register");
        dispatch({
            "type": "REGISTER"
        });
    },
    uploadImage: (imageInfo) => {
        dispatch({
            "type": "IMAGE_UPLOAD",
            base64Image: imageInfo.base64
        });
    }
});

const UserRegistrationContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(UserRegistrationComponent);

export default UserRegistrationContainer;