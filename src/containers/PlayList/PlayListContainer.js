import { connect } from 'react-redux';
import PlayListComponent from '../../components/PlayList/PlayListComponent';
import PlayListServiceClient from '../../services/playlist/PlayListService';

const stateToPropsMapper = state => ({
    ...state.PlayListReducer,
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
    getPlayListById: (id) => {
        PlayListServiceClient.getInstance().getPlayListById(id).then(
            playlist => {
                console.log(playlist);
                dispatch({
                    type: "GET_PLAYLIST_BY_ID",
                    playlist: playlist
                });
            }
        )
    }
})

const PlayListContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(PlayListComponent);


export default PlayListContainer;