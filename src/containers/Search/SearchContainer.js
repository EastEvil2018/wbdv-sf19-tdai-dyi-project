import SearchComponent from "../../components/Search/SearchComponent";
import { connect } from 'react-redux';
import { SpotifyKey } from "../../models/Search/SearchType";
import { WebUtils } from "../../utils/WebUtils";
import { SpotifyServiceClient } from "../../services/spotify/SpotifyService";

const stateToPropsMapper = state => ({
    ...state.SearchReducer
})

const propsToDispatcher = dispatch => ({
    searchTypeChanged: (searchType) => {
        dispatch({
            type: "SEARCH_TYPE_CHANGED",
            searchType: searchType
        });
    },
    keywordChanged: (keyword) => {
        dispatch({
            type: "KEYWORD_CHANGED",
            keyword: keyword
        });
    },
    search: (history, type, keyword, shouldNavigate) => {
        if (WebUtils.isStringEmpty(keyword)) {
            return;
        }
        SpotifyServiceClient.getInstance().getAccessToken().then(
            token => {
                console.log(token);
                const accessToken = token['access_token'];
                SpotifyServiceClient.getInstance()
                    .search(keyword,
                            accessToken,
                            type).then(
                    response => {
                        console.log("MUSIC RESULTS",response);
                        const results = response[SpotifyKey[type]]['items'];  
                        
                        if (shouldNavigate)
                            history.push('/search/' + type + "/" + keyword);
                        
                        dispatch({
                            type: "SEARCH",
                            results: results
                        });                       
                    }
                );
            }
        )
    }
})



const SearchContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(SearchComponent);

export default SearchContainer;