import { connect } from 'react-redux';
import HomeComponent from "../../components/Home/HomeComponent";
import CommentServiceClient from '../../services/comment/CommentService';
import PlayListServiceClient from '../../services/playlist/PlayListService';
import UserServiceClient from '../../services/user/UserService';


const stateToPropsMapper = state => ({
    ...state.HomeReducer,
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
    getRecentComments: () => {
        const comments = CommentServiceClient.getInstance().getRecentComments();
        dispatch({
            type: "GET_RECENT_COMMENTS",
            comments: comments
        });
    },
    newPlayListNameChanged: (name) => {
        dispatch({
            type: "NEW_PLAYLIST_NAME_CHANGED",
            name: name
        });
    },
    createPlayList: (userId, playList) => {
        PlayListServiceClient.getInstance().createPlayList(userId, playList);
        const user = UserServiceClient.getInstance().getUserById(userId);
        dispatch({
            type: "UPDATE_LOGGED_IN_USER",
            user: user
        });
    },
    deleteComment: (id) => {
        CommentServiceClient.deleteComment(id);
        const comments = CommentServiceClient.getInstance().getRecentComments();
        dispatch({
            type: "GET_RECENT_COMMENTS",
            comments: comments
        });
    }
})

const HomeContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(HomeComponent);

export default HomeContainer;