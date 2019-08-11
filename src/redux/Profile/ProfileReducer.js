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
    switch(action.type) {
        case "GET_USER_BY_ID":
            return {...state, user: action.user, settingForm: action.user}
        case "FOLLOW":
            return {...state, followed: true}
        case "UPDATE_PROFILE_USER":
            return {...state, user: action.user, settingForm: action.user}
        case "UNFOLLOW":
            return {...state, followed: false}
        case "GET_COMMENTS_FOR_USER":
            console.log(state);
            return {...state, user: {...state.user, comments: action.comments}}
        case "NEW_PLAYLIST_NAME_CHANGED":
            return {...state, newPlayList: {...state.newPlayList, name: action.name}};
        case "CREATE_PLAYLIST":
            return {...state};
        case "SETTING_FORM_CHANGED":
            return {...state, settingForm: action.settingForm};
        case "SETTING_FORM_IMAGE_UPLOAD":
            return {...state, settingForm: {...state.settingForm, profilePhoto: action.base64Image }}
        case "UPDATE_PROFILE":
            console.log("UPDATE_PROFILE");
            return {...state, message: action.message}
        default:
            return {...state};
    }
}

export default ProfileReducer;