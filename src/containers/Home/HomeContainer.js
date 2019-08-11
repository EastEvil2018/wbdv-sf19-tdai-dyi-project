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
        CommentServiceClient.getInstance().getRecentComments().then(
            comments => {
                dispatch({
                    type: "GET_RECENT_COMMENTS",
                    comments: comments
                });
            }
        );
    },
    newPlayListNameChanged: (name) => {
        dispatch({
            type: "NEW_PLAYLIST_NAME_CHANGED",
            name: name
        });
    },
    createPlayList: (userId, playList) => {
        PlayListServiceClient.getInstance().createPlayList(userId, playList).then(
            response => {
                UserServiceClient.getInstance().getUserById(userId).then(
                    response => {
                        dispatch({
                            type: "UPDATE_LOGGED_IN_USER",
                            user: response
                        });
                })                
            }
        );
    },
    deleteComment: (loggedInUser, comment) => {
        CommentServiceClient.getInstance().deleteCommentById(comment.id).then(
            response => {
                UserServiceClient.getInstance().getUserById(comment.userId).then(
                    user => {
                        CommentServiceClient.getInstance().getRecentComments().then(
                            comments => {
                                dispatch({
                                    type: "UPDATE_RECENT_COMMENTS",
                                    comments: comments
                                });
                                if (user.id === loggedInUser.id) {
                                    dispatch({
                                        type: "UPDATE_LOGGED_IN_USER",
                                        user: user
                                    });
                                }
                            }
                        );
                    }
                ); 
            }
        );    
    }
})

const HomeContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(HomeComponent);

export default HomeContainer;