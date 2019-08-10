import { connect } from 'react-redux';
import { SpotifyKey } from "../../models/Search/SearchType";
import { WebUtils } from "../../utils/WebUtils";
import { SpotifyServiceClient } from "../../services/spotify/SpotifyService";
import DetailComponent from '../../components/Detail/DetailComponent';
import LikeServiceClient from '../../services/like/LikeService';
import UserServiceClient from '../../services/user/UserService';
import PlayListServiceClient from '../../services/playlist/PlayListService';
import CommentServiceClient from '../../services/comment/CommentService';

const stateToPropsMapper = state => ({
    ...state.DetailReducer,
    ...state.UserStateReducer
})

const propsToDispatcher = dispatch => ({
    initState(searchType, id) {
        SpotifyServiceClient.getInstance().getAccessToken().then(
            token => {
                const accessToken = token['access_token'];
                SpotifyServiceClient.getInstance().searchDetails(id, accessToken, SpotifyKey[searchType]).then(
                    response => {
                        console.log(response);
                        const comments 
                            = CommentServiceClient.getInstance().findAllCommentsByProductId(response.id, response.type);
                        const likes
                            = LikeServiceClient.getInstance().findAllLikesByProductId(response.id, response.type);
                        dispatch({
                            type: "INIT_STATE",
                            searchType: searchType,
                            id: id,
                            product: response,
                            comments: comments,
                            likes: likes
                        })
                    }
                );
        });        
    },
    like: (user, product) => {
        LikeServiceClient.getInstance().like(user, product);
        user = UserServiceClient.getInstance().getUserById(user.id);
        const likes
            = LikeServiceClient.getInstance().findAllLikesByProductId(product.id, product.type); 
        dispatch({
            type: "UPDATE_PRODUCT_LIKES",
            likes: likes
        },
        {
            type: "UPDATE_LOGGED_IN_USER",
            user: user
        })
    } ,
    unLike: (user, product) => {
        LikeServiceClient.getInstance().unLike(user, product);
        user = UserServiceClient.getInstance().getUserById(user.id);
        const likes
            = LikeServiceClient.getInstance().findAllLikesByProductId(product.id, product.type); 
        dispatch({
            type: "UPDATE_PRODUCT_LIKES",
            likes: likes
        },
        {
            type: "UPDATE_LOGGED_IN_USER",
            user: user
        })
    },
    addToPlayList: (user, product, playListId) => {
        PlayListServiceClient.addToPlayList(user, product, playListId);
        user = UserServiceClient.getInstance().getUserById(user.id);
        dispatch({
            type: "UPDATE_LOGGED_IN_USER",
            user: user            
        });
    },
    selectedPlayListChanged: (playListId) => {
        dispatch({
            type: "SELECTED_PLAYLIST_CHANGED",
            selectedPlayListId: playListId
        })
    },
    commentContentChanged: (commentContent) => {
        dispatch({
            type: "COMMENT_CONTENT_CHANGED",
            commentContent: commentContent
        });
    },
    postComment: (user, product, commentContent) => {
        CommentServiceClient.getInstance().postComment(user, product, commentContent);
        user = UserServiceClient.getInstance().getUserById(user.id);
        const comments
            = CommentServiceClient.getInstance().findAllCommentsByProductId(product.id, product.type); 
        dispatch({
            type: "UPDATE_PRODUCT_COMMENTS",
            likes: comments
        },
        {
            type: "UPDATE_LOGGED_IN_USER",
            user: user
        })      
    },
    deleteComment: (commentId) => {
        const comment = CommentServiceClient.findCommentById(commentId);
        const commenterId = comment.commenter.id;
        const productId = comment.product.id;
        const commenter = UserServiceClient.findUserById(commenterId);
        CommentServiceClient.deleteCommentById(commentId);
        const user = UserServiceClient.getInstance().getUserById(commenterId);
        const comments = CommentServiceClient.findAllCommentsByProductId(productId, comment.product.type);
        dispatch({
            type: "UPDATE_LOGGED_IN_USER",
            user: user
        },
        {
            type: "UPDATE_PRODUCT_COMMENTS",
            likes: comments            
        })           
    }
})



const DetailContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(DetailComponent);

export default DetailContainer;