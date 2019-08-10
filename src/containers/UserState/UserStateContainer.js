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
                console.log("GET SESSION : ",response);
                if (response.message)
                    return;
                else {
                    UserServiceClient.getInstance().getUserById(response.id).then(
                        response => {
                            dispatch({
                                type: 'UPDATE_LOGGED_IN_USER',
                                user: response
                            });
                        }
                    )
                }
            }
        );
    },
    logout: () => {
        UserServiceClient.getInstance().logout().then(
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