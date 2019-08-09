import UserRegistrationComponent from "../../components/UserRegistration/UserRegistrationComponent";
import { connect } from 'react-redux';
import UserService from "../../services/user/UserService";

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
        UserService.getInstance().register(info).then(
            response => {
                console.log("Register");
                console.log(response);
                dispatch({
                    "type": "REGISTER"
                });                
            }
        );

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