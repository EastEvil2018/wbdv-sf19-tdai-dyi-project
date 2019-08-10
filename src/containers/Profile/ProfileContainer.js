import { connect } from 'react-redux';
import ProfileComponent from '../../components/Profile/ProfileComponent';
import UserServiceClient from '../../services/user/UserService';
import CommentServiceClient from '../../services/comment/CommentService';
import FollowServiceClient from '../../services/follow/FollowService';
import PlayListServiceClient from '../../services/playlist/PlayListService';


const stateToPropsMapper = state => ({
    ...state.ProfileReducer,
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
    getUserById: (userId) => {
        const user = UserServiceClient.getInstance().getUserById(userId);
        dispatch({
            type: "GET_USER_BY_ID",
            user: user
        });
    },
    follow: (userId, profileId) => {
        FollowServiceClient.follow(userId, profileId);
        dispatch({
            type: "FOLLOW"
        });
    },
    unfollow: (userId, profileId) => {
        FollowServiceClient.unfollow(userId, profileId);
        const loggedInUser = UserServiceClient.getInstance().findUserById(userId);
        const user = UserServiceClient.getInstance().findUserById(profileId);
        dispatch({
            type: "UPDATE_LOGGED_IN_USER",
            user: loggedInUser
        },
        {
            type: "UPDATE_PROFILE_USER",
            user: user
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
        var comment = CommentServiceClient.findCommentById(id);
        var commenterId = comment.commenter.id;
        CommentServiceClient.deleteCommentById(id);
        const user = UserServiceClient.getInstance().getUserById(commenterId);
        dispatch({
            type: "UPDATE_PROFILE_USER",
            user: user
        });        
    },
    updateUser: (user) => {
        const updatedUser = UserServiceClient.getInstance().updateUser(user);
        dispatch({
            type: "UPDATE_LOGGED_IN_USER",
            user: updatedUser
        },
        {
            type: "UPDATE_PROFILE_USER",
            user: updatedUser
        })
    },
    settingFormChanged: (settingForm) => {
        dispatch({
            type: "SETTING_FORM_CHANGED",
            settingForm: settingForm
        })
    },
    uploadImage: (imageInfo) => {
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