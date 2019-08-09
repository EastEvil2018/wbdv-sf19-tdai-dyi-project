const UserStateReducer = (
    state = {
        id: "",
        role: "",
        loggedIn: false
    }, action
) => {
    switch(action.type) {
        case "USER_LOG_IN":
            console.log("USER_LOG_IN");
            return {...state, id: action.id, role: action.role, loggedIn: true}
        case "LOG_OUT":
            return {...state, id: "", role: "", loggedIn: false}
        default:
            return state;
    }
}

export default UserStateReducer;