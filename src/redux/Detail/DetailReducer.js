import { SpotifyType } from '../../models/Search/SearchType';

const DetailReducer = (
    state = {
        searchType: SpotifyType.TRACK,
        id: "",
        product: Object
    }, action
) => {
    switch(action.type) {
        case "INIT_STATE":
            return {...state, 
                    searchType: action.searchType, 
                    id: action.id, 
                    product: action.product}
        default:
            console.log(state);
            return {...state};
    }
}

export default DetailReducer;