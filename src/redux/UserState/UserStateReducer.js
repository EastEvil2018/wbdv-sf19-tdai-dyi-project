const UserStateReducer = (
    state = {
        loggedInUser: {
            id: "",
            role: "",
            username: "",
            intro: "",
            profileImageBase64: "",
            comments: [],
            likes: [],
            follows: [],
            followers: [],
            playlists: []
        },
        loggedIn: false
    }, action
) => {
    switch(action.type) {
        case "USER_LOG_IN":
            console.log("USER_LOG_IN");
            return {...state, loggedInUser: action.user, loggedIn: true}
        case "UPDATE_LOGGED_IN_USER":
            return {...state, loggedInUser: action.user, loggedIn: true}
        case "LOG_OUT":
            return {...state, 
                    loggedInUser: { id: "",
                                    role: "",
                                    username: "",
                                    intro: "",
                                    profileImageBase64: "",
                                    comments: [],
                                    likes: [],
                                    follows: [],
                                    followers: [],
                                    playlists: []
                                }, 
                    loggedIn: false}
        default:
            return state;
    }
}

export default UserStateReducer;