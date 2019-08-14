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
        const validate = (info) => {
            return  (info.username === undefined || 
                     info.username === "" ||
                     info.password === undefined ||
                     info.password === "" ||
                     info.firstName === '' ||
                     info.firstName === undefined ||
                     info.lastName === '' ||
                     info.lastName === undefined)
        }
        if (info.password !== info.verifiedPassword) {
            return;
        }
        if (validate(info)) {
            dispatch({
                type: "REGISTER_FAILED",
                message: "You have fields unfilled."
            });
            return;
        }
        UserServiceClient.getInstance().register(info).then(
            response => {
                console.log("Register");
                console.log(response);  
                if (response.message) {
                    dispatch({
                        type: "REGISTER_FAILED",
                        message: "Username has been used."
                    });
                } else {             
                    history.push('/login'); 
                    dispatch({
                        'type': "REGISTER"
                    })
                }
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