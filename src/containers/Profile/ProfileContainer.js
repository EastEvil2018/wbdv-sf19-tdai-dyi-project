import { connect } from 'react-redux';
import ProfileComponent from '../../components/Profile/ProfileComponent';
import UserServiceClient from '../../services/user/UserService';
import CommentServiceClient from '../../services/comment/CommentService';
import FollowServiceClient from '../../services/follow/FollowService';
import PlayListServiceClient from '../../services/playlist/PlayListService';
import LikeServiceClient from '../../services/like/LikeService';


const stateToPropsMapper = state => ({
    ...state.ProfileReducer,
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
    getUserById: (userId) => {
        UserServiceClient.getInstance().getUserById(userId).then(
            response => {
                console.log("Profile Get User By id", response);
                dispatch({
                    type: "GET_USER_BY_ID",
                    user: response
                });                
            }
        );

    },
    findAllLikesForUser: (userId) => {
        return LikeServiceClient.getInstance().findAllLikesForUser(userId).then(
            likes => {
                return likes;
            }
        );
    },
    follow: (userId, profileId) => {
        FollowServiceClient.getInstance().follow(userId, profileId).then(
            response => {
                UserServiceClient.getInstance().getUserById(userId).then(
                    loggedInUser => {
                        UserServiceClient.getInstance().getUserById(profileId).then(
                            profileUser => {
                                dispatch({
                                    type: "UPDATE_LOGGED_IN_USER",
                                    user: loggedInUser
                                });
                                dispatch({
                                    type: "UPDATE_PROFILE_USER",
                                    user: profileUser
                                });
                            }
                        )
                    }
                );
            }
        );
    },
    unfollow: (userId, profileId) => {
        FollowServiceClient.getInstance().unfollow(userId, profileId).then(
            response => {
                UserServiceClient.getInstance().getUserById(userId).then(
                    loggedInUser => {
                        UserServiceClient.getInstance().getUserById(profileId).then(
                            profileUser => {
                                dispatch({
                                    type: "UPDATE_LOGGED_IN_USER",
                                    user: loggedInUser
                                });
                                dispatch({
                                    type: "UPDATE_PROFILE_USER",
                                    user: profileUser
                                });
                            }
                        )
                    }
                );
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
                        dispatch({
                            type: "UPDATE_PROFILE_USER",
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
                        if (user.id === loggedInUser.id) {
                            dispatch({
                                type: "UPDATE_LOGGED_IN_USER",
                                user: user
                            });
                        }
                        dispatch({
                            type: "UPDATE_PROFILE_USER",
                            user: user            
                        }); 
                    }
                ); 
            }
        );         
    },
    updateUser: (user) => {
        UserServiceClient.getInstance().updateUser(user).then(
            updatedUser => {
                console.log("UPDATED USER : ", updatedUser);
                dispatch({
                    type: "UPDATE_LOGGED_IN_USER",
                    user: updatedUser
                });
                dispatch({
                    type: "UPDATE_PROFILE_USER",
                    user: updatedUser
                });
            }
        );
    },
    settingFormChanged: (settingForm) => {
        dispatch({
            type: "SETTING_FORM_CHANGED",
            settingForm: settingForm
        })
    },
    uploadImage: (imageInfo) => {
        console.log("SETTING_FORM_IMAGE_UPLOAD : ", imageInfo);
        dispatch({
            "type": "SETTING_FORM_IMAGE_UPLOAD",
            base64Image: imageInfo.base64
        });
    }
})

const ProfileContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(ProfileComponent);


export default ProfileContainer;