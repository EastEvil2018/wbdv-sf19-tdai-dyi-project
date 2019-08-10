import { connect } from 'react-redux';
import UserStateComponent from '../../components/UserState/UserStateComponent';
import UserServiceClient from '../../services/user/UserService';


const stateToPropsMapper = state => ({
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
    checkSession: () => {
        UserServiceClient.getInstance().getUserFromSession().then(
            response => {
                console.log(response);
                if (response.message)
                    return;
                else
                    dispatch({
                        type: "USER_LOG_IN",
                        user: response
                    });
            }
        );
    },
    logOut: () => {
        UserServiceClient.getInstance().logOut().then(
            response => {
                dispatch({
                    type: "LOG_OUT"
                });
            }
        )
    }
})

const UserStateContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(UserStateComponent);

export default UserStateContainer;