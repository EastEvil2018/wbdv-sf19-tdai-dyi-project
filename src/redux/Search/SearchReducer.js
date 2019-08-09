import { SpotifyType } from '../../models/Search/SearchType';

const SearchReducer = (
    state = {
        searchType: SpotifyType.TRACK,
        curType: SpotifyType.TRACK,
        keyword: "",
        results: [],
        pagination: {
            countPerPage: 5,
            count: 20,
            pageCount: 4,
            curPage: 1
        }
    }, action
) => {
    switch(action.type) {
        case "SEARCH_TYPE_CHANGED":
            return {...state, searchType: action.searchType}
        case "KEYWORD_CHANGED":
            return {...state, keyword: action.keyword}
        case "SEARCH":
            console.log(state);
            return {...state, results: action.results, curType: state.searchType}
        default:
            return {...state};
    }
}

export default SearchReducer;