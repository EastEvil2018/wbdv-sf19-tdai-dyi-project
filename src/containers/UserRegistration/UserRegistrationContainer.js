import UserRegistrationComponent from "../../components/UserRegistration/UserRegistrationComponent";
import { connect } from 'react-redux';
import UserServiceClient from "../../services/user/UserService";
// import { history } from "../../helper/history";
import { withRouter } from "react-router";


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
    register: (info, history) => {
        if (info.password !== info.verifiedPassword) {
            return;
        }
        UserServiceClient.getInstance().register(info).then(
            response => {
                console.log("Register");
                console.log(response);                
                history.push('/login'); 
                dispatch({
                    'type': "REGISTER"
                })
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
    = withRouter(connect(
        stateToPropsMapper,
        propsToDispatcher)(UserRegistrationComponent));

export default UserRegistrationContainer;