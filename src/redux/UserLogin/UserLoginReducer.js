const UserLoginReducer = (
    state = {
        username: "",
        password: "",
        loggedIn: false,
        message: ""
    }, action
) => {
    switch(action.type) {
        case "PASSWORD_CHANGED":
            return {...state, password: action.password, message: ""};
        case "USERNAME_CHANGED":
            return {...state, username: action.username, message: ""};
        case "LOG_IN_SUCCEED":
            return {...state, loggedIn: true, message: ""};
        case "LOG_IN_FAILED":
            return {...state, message: action.message};
        default:
            return {...state, message: ""};
    }
}

export default UserLoginReducer;