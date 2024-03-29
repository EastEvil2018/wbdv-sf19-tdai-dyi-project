import { SpotifyType } from '../../models/Search/SearchType';

const DetailReducer = (
    state = {
        searchType: SpotifyType.TRACK,
        id: "",
        product: Object,
        selectedPlayListId: "",
        newCommentContent: "",
        comments: [],
        likes: []
    }, action
) => {
    switch(action.type) {
        case "INIT_STATE":
            return {...state, 
                    searchType: action.searchType, 
                    id: action.id, 
                    product: action.product,
                    comments: action.comments,
                    likes: action.likes}
        case "UPDATE_PRODUCT_COMMENTS":
            return {...state, comments: action.comments}
        case "UPDATE_PRODUCT_LIKES":
            return {...state, likes: action.likes}
        case "SELECTED_PLAYLIST_CHANGED":
            return {...state, selectedPlayListId: action.selectedPlayListId}
        case "COMMENT_CONTENT_CHANGED":
            return {...state, newCommentContent: action.commentContent}
        case "FIND_ALL_ALBUMS_FOR_ARTIST":
            return {...state, product: {...state.product, albums: action.albums}}
        default:
            console.log(state);
            return {...state};
    }
}

export default DetailReducer;