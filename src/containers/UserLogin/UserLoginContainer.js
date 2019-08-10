import UserLoginComponent from "../../components/UserLogin/UserLoginComponent";
import { connect } from 'react-redux';
import UserService from "../../services/user/UserService";


const stateToPropsMapper = state => ({
    ...state.UserLoginReducer,
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
    passwordChanged: (password) => {
        dispatch({
            type: "PASSWORD_CHANGED",
            password: password
        });
    },
    usernameChanged: (username) => {
        dispatch({
            type: "USERNAME_CHANGED",
            username: username
        });
    },
    login: (username, password) => {
        console.log(username);
        UserService.getInstance().login(username, password).then(
            response => {
                console.log("LOGIN RESPONSE", response)
                UserService.getInstance().getUserFromSession().then(
                    response => {
                        console.log("GET SESSION", response);
                    }
                );
                if (response.message) {
                    dispatch({
                        type: "LOG_IN_FAILED",
                        message: "Log in failed"
                    });
                } else {
                    dispatch({
                        type: "USER_LOG_IN",
                        id: "response.id",
                        role: "response.role"
                    });
                }
            }
        );
    }
})

const UserLoginContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(UserLoginComponent);

export default UserLoginContainer;