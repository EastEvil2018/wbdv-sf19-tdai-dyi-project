import { SpotifyType } from '../../models/Search/SearchType';

const HomeReducer = (
    state = {
        comments: [],
        newPlayList: {
            name: ""
        },
        notifications: []
    }, action
) => {
    switch(action.type) {
        case "NEW_PLAYLIST_NAME_CHANGED":
            return {...state, newPlayList: {...state.newPlayList, name: action.name}};
        case "GET_RECENT_COMMENTS":
            return {...state, comments: action.comments};
        case "CREATE_PLAYLIST":
            return {...state};
        case "UPDATE_RECENT_COMMENTS":
            return {...state, comments: action.comments};
        case "UPDATE_RECENT_NOTIFICATIONS":
            return {...state, notifications: action.notifications}
        default:
            return {...state};
    }
}

export default HomeReducer;