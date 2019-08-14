import { SpotifyType } from '../../models/Search/SearchType';

const ProfileReducer = (
    state = {
        followed: Boolean,
        user: {
            id: "",
            username: "",
            intro: "",
            role: "",
            profileImageBase64: "",
            comments: [
                {
                    id: "",
                    product: {
                        type: "track",
                        id: "",
                        name: ""
                    },
                    user: {
                        id: "",
                        username: ""
                    }
                }
            ],
            likes: [
                {
                    id: "",
                    product: {
                        type: "track",
                        id: "",
                        name: ""
                    },
                    user: {
                        id: "",
                        username: ""
                    }
                }                
            ],
            follows: [],
            followers: [],
            playlist: []
        },
        newPlayList: {
            name: ""
        },
        settingForm: {

        },
        message: ""
    }, action
) => {
    const originState = {
        followed: Boolean,
        user: {
            id: "",
            username: "",
            intro: "",
            role: "",
            profileImageBase64: "",
            comments: [
                {
                    id: "",
                    product: {
                        type: "track",
                        id: "",
                        name: ""
                    },
                    user: {
                        id: "",
                        username: ""
                    }
                }
            ],
            likes: [
                {
                    id: "",
                    product: {
                        type: "track",
                        id: "",
                        name: ""
                    },
                    user: {
                        id: "",
                        username: ""
                    }
                }                
            ],
            follows: [],
            followers: [],
            playlist: []
        },
        newPlayList: {
            name: ""
        },
        settingForm: {

        },
        commentContentToUpdate: {
            id: "",
            commentContent: ""
        },
        message: ""
    };
    switch(action.type) {
        case "GET_USER_BY_ID":
            return {...state, user: action.user, settingForm: action.user, message: ""}
        case "FOLLOW":
            return {...state, followed: true, message: ""}
        case "UPDATE_PROFILE_USER":
            return {...state, user: action.user, settingForm: action.user, message: ""}
        case "UNFOLLOW":
            return {...state, followed: false, message: ""}
        case "GET_COMMENTS_FOR_USER":
            console.log(state);
            return {...state, user: {...state.user, comments: action.comments}, message: ""}
        case "NEW_PLAYLIST_NAME_CHANGED":
            return {...state, newPlayList: {...state.newPlayList, name: action.name}, message: ""};
        case "CREATE_PLAYLIST":
            return {...state, message: ""};
        case "SETTING_FORM_CHANGED":
            return {...state, settingForm: action.settingForm, message: ""};
        case "SETTING_FORM_IMAGE_UPLOAD":
            return {...state, settingForm: {...state.settingForm, profilePhoto: action.base64Image }, message: ""}
        case "UPDATE_PROFILE":
            console.log("UPDATE_PROFILE");
            return {...state, message: ""}
        case "DELETE_ACCOUNT":
            return {state: originState, message: ""}
        case "UPDATE_USER_FAILED":
            return {...state, message: action.message}
        case "COMMENT_CONTENT_CHANGED":
            return {...state, commentToUpdate: {...state.commentToUpdate, id: action.commentId, commentContent: action.commentContent}}
        default:
            return {...state};
    }
}

export default ProfileReducer;