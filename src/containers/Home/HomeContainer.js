import { connect } from 'react-redux';
import HomeComponent from "../../components/Home/HomeComponent";
import CommentServiceClient from '../../services/comment/CommentService';
import PlayListServiceClient from '../../services/playlist/PlayListService';
import UserServiceClient from '../../services/user/UserService';
import NotificationServiceClient from '../../services/notification/NotificationService';


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
    updateComment(loggedInUser,comment, commentContent) {
        CommentServiceClient.getInstance().updateCommentById(comment, commentContent).then(
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
    },
    postNotification: (loggedInUser, content) => {
        NotificationServiceClient.getInstance().postNotification(loggedInUser.id, content).then(
            response => {
                NotificationServiceClient.getInstance().findRecentNotifications().then(
                    notifications => {
                        UserServiceClient.getInstance().getUserById(loggedInUser.id).then(
                            user => {
                                dispatch({
                                    type: "UPDATE_RECENT_NOTIFICATIONS",
                                    notifications: notifications
                                });
                                dispatch({
                                    type: "UPDATE_LOGGED_IN_USER",
                                    user: user
                                });
                            }
                        )
                    }
                );
            }
        );
    },
    deleteNotification: (notification) => {
        NotificationServiceClient.getInstance().deleteNotification(notification).then(
            response => {
                NotificationServiceClient.getInstance().findRecentNotifications().then(
                    notifications => {
                        dispatch({
                            type: "UPDATE_RECENT_NOTIFICATIONS",
                            notifications: notifications
                        });
                    }
                );
            }
        );
    },
    updateNotification: (notification, content) => {
        NotificationServiceClient.getInstance().updateNotification(notification, content).then(
            response => {
                NotificationServiceClient.getInstance().findRecentNotifications().then(
                    notifications => {
                        dispatch({
                            type: "UPDATE_RECENT_NOTIFICATIONS",
                            notifications: notifications
                        });
                    }
                );
            }
        );
    },
    getRecentNotifications: () => {
        NotificationServiceClient.getInstance().findRecentNotifications().then(
            notifications => {
                dispatch({
                    type: "UPDATE_RECENT_NOTIFICATIONS",
                    notifications: notifications
                });
            }
        );
    }
})

const HomeContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(HomeComponent);

export default HomeContainer;