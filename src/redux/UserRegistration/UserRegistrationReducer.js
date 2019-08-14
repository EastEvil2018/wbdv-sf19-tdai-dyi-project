const UserRegistrationReducer = (
    state = {
        info: {
            username: "",
            password: "",
            verifiedPassword: "",
            firstName: "",
            lastName: "",
            intro: "",
            role: "USER",
            profileImgBase64: null,
        },
        message: "",
        registered: false
    }, action
) => {
    switch(action.type) {
        case "REGISTRATION_INFO_CHANGED":
            return {...state, info: action.registrationInfo, message: ""};
        case "REGISTER":
            return {...state, 
                info: {
                    username: "",
                    password: "",
                    verifiedPassword: "",
                    firstName: "",
                    lastName: "",
                    intro: "",
                    role: "USER",
                    profileImgBase64: null,                    
                },registered: true, message: ""};
        case "REGISTER_FAILED":
            return {...state, message: action.message}
        case "IMAGE_UPLOAD":
            return {...state, info: {...state.info, profileImgBase64: action.base64Image }, message: ""}
        default:
            return state;
    }
}

export default UserRegistrationReducer;