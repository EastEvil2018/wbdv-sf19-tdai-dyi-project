
const PlayListReducer = (
    state = {
        playlist: {
            id: "",
            name: "",
            list: []
        }
    }, action
) => {
    switch(action.type) {
        case "GET_PLAYLIST_BY_ID":
            return {...state, playlist: action.playlist}
        default:
            return {...state};
    }
}

export default PlayListReducer;