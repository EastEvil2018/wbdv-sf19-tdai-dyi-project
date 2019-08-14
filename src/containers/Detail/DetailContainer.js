import { connect } from 'react-redux';
import { SpotifyKey } from "../../models/Search/SearchType";
import { WebUtils } from "../../utils/WebUtils";
import { SpotifyServiceClient } from "../../services/spotify/SpotifyService";
import DetailComponent from '../../components/Detail/DetailComponent';
import LikeServiceClient from '../../services/like/LikeService';
import UserServiceClient from '../../services/user/UserService';
import PlayListServiceClient from '../../services/playlist/PlayListService';
import CommentServiceClient from '../../services/comment/CommentService';
import { continueStatement } from '@babel/types';

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
                    product => {
                        // console.log(product.id, "/", product.type);
                        // if (searchType !== "artist") {
                        //     product.artists = product.artists.map(artist => {
                        //         SpotifyServiceClient.getInstance().searchDetails(artist.id, accessToken, SpotifyKey[artist.type]).then(
                        //             artistDetail => {
                        //                 artist = artistDetail;
                        //                 return artist;
                        //             }
                        //         )
                        //     });
                        // }
                        CommentServiceClient.getInstance().findAllCommentsForProduct(product.id, product.type).then(
                            comments => {
                                console.log(comments);
                                LikeServiceClient.getInstance().findAllLikesForProduct(product.id, product.type).then(
                                    likes => {
                                        console.log(likes);
                                        dispatch({
                                            type: "INIT_STATE",
                                            searchType: searchType,
                                            id: id,
                                            product: product,
                                            comments: comments,
                                            likes: likes
                                        })
                                    }
                                )                             
                            }
                        );
                    }
                );
        });        
    },
    findAlbumsForArtist: (id) => {
        SpotifyServiceClient.getInstance().getAccessToken().then(
            token => {
                const accessToken = token['access_token'];
                SpotifyServiceClient.getInstance().getAlbumsForArtist(id, accessToken).then(
                    albums => {
                        dispatch({
                            type: "FIND_ALL_ALBUMS_FOR_ARTIST",
                            albums: albums
                        });
                    }
                );
            }
        );        
    },
    postLike: (user, product) => {
        switch(product.type) {
            case "album":
                product.productImageUrl = product.images[0].url;
                break;
            case "track":
                product.productImageUrl = product.album.images[0].url;
                break;
            case "artist":
                product.productImageUrl = product.images[0].url;
                break;
            default:
                break;
        }
        LikeServiceClient.getInstance().like(user, product).then(
            response => {
                UserServiceClient.getInstance().getUserById(user.id).then(
                    user => {
                        LikeServiceClient.getInstance().findAllLikesForProduct(product.id, product.type).then(
                            likes => {
                                console.log(likes);
                                dispatch({
                                    type: "UPDATE_PRODUCT_LIKES",
                                    likes: likes
                                });
                                dispatch({
                                    type: "UPDATE_LOGGED_IN_USER",
                                    user: user
                                });                                
                            }
                        );
                    }
                );

            }
        );
    } ,
    updateComment(loggedInUser,  comment, commentContent) {
        CommentServiceClient.getInstance().updateCommentById(comment, commentContent).then(
            response => {
                UserServiceClient.getInstance().getUserById(comment.userId).then(
                    user => {
                        CommentServiceClient.getInstance().
                        findAllCommentsForProduct(comment.productId, comment.productType).then(
                            comments => {
                                if (user.id === loggedInUser.id) {
                                    dispatch({
                                        type: "UPDATE_LOGGED_IN_USER",
                                        user: user
                                    });
                                }
                                dispatch({
                                    type: "UPDATE_PRODUCT_COMMENTS",
                                    comments: comments            
                                }); 
                            }
                        )
                    }
                );
            }
        )
    },
    postUnlike: (user, product) => {
        LikeServiceClient.getInstance().unLike(user, product).then(
            response => {
                UserServiceClient.getInstance().getUserById(user.id).then(
                    user => {
                        LikeServiceClient.getInstance().findAllLikesForProduct(product.id, product.type).then(
                            likes => {
                                console.log(likes);
                                dispatch({
                                    type: "UPDATE_PRODUCT_LIKES",
                                    likes: likes
                                });
                                dispatch({
                                    type: "UPDATE_LOGGED_IN_USER",
                                    user: user
                                });                                
                            }
                        );
                    }
                );

            }
        );
    },
    addToPlayList: (user, product, playListId) => {
        if (playListId === "")
            return;
        PlayListServiceClient.getInstance().addToPlayList(user, product, playListId).then(
            response => {
                UserServiceClient.getInstance().getUserById(user.id).then(
                    response => {
                        dispatch({
                            type: "UPDATE_LOGGED_IN_USER",
                            user: response            
                        });  
                    }
                )
            }
        );
    },
    selectedPlayListChanged: (playListId) => {
        dispatch({
            type: "SELECTED_PLAYLIST_CHANGED",
            selectedPlayListId: playListId
        })
    },
    commentContentChanged: (commentContent) => {
        console.log('COMMENT CONTENT CHANGED : ', commentContent)
        dispatch({
            type: "COMMENT_CONTENT_CHANGED",
            commentContent: commentContent
        });
    },
    postComment: (user, product, commentContent) => {
        switch(product.type) {
            case "album":
                product.productImageUrl = product.images[0].url;
                break;
            case "track":
                product.productImageUrl = product.album.images[0].url;
                break;
            case "artist":
                product.productImageUrl = product.images[0].url;
                break;
            default:
                break;
        }
        CommentServiceClient.getInstance().postComment(user, product, commentContent).then(
            response => {
                UserServiceClient.getInstance().getUserById(user.id).then(
                    user => {
                        CommentServiceClient.getInstance().findAllCommentsForProduct(product.id, product.type).then(
                            comments => {
                                dispatch({
                                    type: "UPDATE_PRODUCT_COMMENTS",
                                    comments: comments
                                });
                                dispatch({
                                    type: "UPDATE_LOGGED_IN_USER",
                                    user: user
                                })                                 
                            }
                    )}
                )
            }
        );    
    },
    deleteComment: (loggedInUser, comment) => {
        CommentServiceClient.getInstance().deleteCommentById(comment.id).then(
            response => {
                UserServiceClient.getInstance().getUserById(comment.userId).then(
                    user => {
                        CommentServiceClient.getInstance().
                        findAllCommentsForProduct(comment.productId, comment.productType).then(
                            comments => {
                                if (user.id === loggedInUser.id) {
                                    dispatch({
                                        type: "UPDATE_LOGGED_IN_USER",
                                        user: user
                                    });
                                }
                                dispatch({
                                    type: "UPDATE_PRODUCT_COMMENTS",
                                    comments: comments            
                                }); 
                            }
                        )
                    }
                ); 
            }
        );    
    }
})



const DetailContainer 
    = connect(
        stateToPropsMapper,
        propsToDispatcher)(DetailComponent);

export default DetailContainer;