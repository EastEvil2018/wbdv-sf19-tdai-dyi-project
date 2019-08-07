import UserLoginComponent from "../../components/UserLogin/UserLoginComponent";
import { connect } from 'react-redux';
import UserService from "../../services/user/UserService";


const stateToPropsMapper = state => ({
    ...state.UserLoginReducer
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
                console.log(response);
                if (response === -1) {
                    dispatch({
                        type: "LOG_IN_FAILED",
                        message: "Log in failed"
                    });
                } else {
                    dispatch({
                        type: "LOG_IN_SUCCEED"
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