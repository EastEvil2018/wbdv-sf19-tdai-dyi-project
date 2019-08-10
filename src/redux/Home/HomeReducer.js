import { SpotifyType } from '../../models/Search/SearchType';

const HomeReducer = (
    state = {
        comments: [{
            product: {},
            time: "",
            user: {}
        }],
        newPlayList: {
            name: ""
        }
    }, action
) => {
    switch(action.type) {
        case "NEW_PLAYLIST_NAME_CHANGED":
            return {...state, newPlayList: {...state.newPlayList, name: action.name}};
        case "CREATE_PLAYLIST":
            return {...state};
        default:
            return {...state};
    }
}

export default HomeReducer;