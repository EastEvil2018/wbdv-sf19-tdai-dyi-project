import { connect } from 'react-redux';
import { SpotifyKey } from "../../models/Search/SearchType";
import { WebUtils } from "../../utils/WebUtils";
import { SpotifyServiceClient } from "../../services/spotify/SpotifyService";
import DetailComponent from '../../components/Detail/DetailComponent';

const stateToPropsMapper = state => ({
    ...state.DetailReducer
})

const propsToDispatcher = dispatch => ({
    initState(searchType, id) {
        SpotifyServiceClient.getInstance().getAccessToken().then(
            token => {
                const accessToken = token['access_token'];
                SpotifyServiceClient.getInstance().searchDetails(id, accessToken, SpotifyKey[searchType]).then(
                    response => {
                        console.log(response);
                        dispatch({
                            type: "INIT_STATE",
                            searchType,
                            id: id,
                            product: response
                        })
                    }
                );
        });        
    }
})



const DetailContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(DetailComponent);

export default DetailContainer;