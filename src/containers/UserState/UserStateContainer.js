import { connect } from 'react-redux';
import UserService from "../../services/user/UserService";
import UserStateComponent from '../../components/UserState/UserStateComponent';


const stateToPropsMapper = state => ({
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
    checkSession: () => {
        UserService.getInstance().getUserFromSession().then(
            response => {
                console.log("SESSION CHECK", response);
                if (response.message)
                    return;
                else
                    dispatch({
                        type: "USER_LOG_IN",
                        id: response.id,
                        role: response.role
                    });
            }
        );
    },
    logOut: () => {
        dispatch({
            type: "LOG_OUT"
        });
    }
})

const UserStateContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(UserStateComponent);

export default UserStateContainer;