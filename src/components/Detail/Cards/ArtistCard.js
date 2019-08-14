import React from 'react';
import '../../../css/components/Detail/Carousels/ArtistCarousel.css';
import LikeList from '../../Profile/LikeList';
import CommentList from '../../Comment/CommentList';
import ArtistCarousel from '../Carousels/ArtistCarousel';
import AlbumCarousel from '../Carousels/AlbumCarousel';
import { SpotifyServiceClient } from '../../../services/spotify/SpotifyService';

const ArtistCard = ({artist, 
                    loggedIn, 
                    loggedInUser, 
                    likes,
                    comments,
                    postLike, 
                    postUnlike, 
                    commmentContent,
                    commentContentChanged, 
                    postComment,
                    deleteComment}) => {
    console.log("Render ArtistCard : ", likes, loggedInUser, artist, commmentContent);
    const signal = loggedInUser.favorites && loggedInUser.favorites.find(like => 
        like.productType === artist.type && like.productId === artist.id
    )

    const hasLiked = signal !== undefined;

    console.log("Has Likes : ", hasLiked);

    return (
        <div className="container">
            <div className="card border-0">
                <div className="card-header border-danger text-dark"
                        style={{borderWidth: "0.1rem", fontSize: "1.1rem", background:"#f5f5f5"}}>
                        <div className="row">
                            <div className="col my-auto">
                                <i className="fa fa-circle mr-2 text-danger"></i> 
                                Artist
                            </div>
                            <div className="col text-right"
                                 hidden={loggedIn ? false : true}>                                                                  >
                                <button type="button" 
                                        className="btn btn-outline-primary"
                                        hidden={hasLiked ? true : false}
                                        onClick={(event) => postLike(loggedInUser, artist)}>
                                    Like
                                </button>
                                <button type="button" 
                                        className="btn btn-outline-primary"
                                        hidden={hasLiked ? false : true}
                                        onClick={(event) => postUnlike(loggedInUser, artist)}>
                                    UnLike
                                </button>
                            </div>
                        </div>
                </div>
                <div className="card-body container">
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Name
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            {artist.name}
                        </div>                                       
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Profile
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <img className="d-block rounded-circle mx-auto"
                                    src={artist.images[0] ? `${artist.images[0].url}` : require('../../../images/default-singer-profile.png')}
                                    alt="First slide"
                                    style={{width: "6rem", height: "6rem"}}/>
                        </div>                                       
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Ablum
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <AlbumCarousel albums={artist.albums.items}/>
                        </div>    
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Preview
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <iframe src={"https://open.spotify.com/embed/artist/" + artist.id}
                                    width="300" 
                                    height="80" 
                                    frameborder="0" 
                                    allowtransparency="true" 
                                    allow="encrypted-media">
                            </iframe>
                        </div>    
                    </div>
                </div>
            </div>
            <LikeList likes={likes} showProfile={true}/>
            <CommentList title={"Comments"}
                         loggedInUser={loggedInUser}
                         comments={comments} 
                         showCommenterName={true} 
                         showProductName={false}
                         adminMode={loggedIn && loggedInUser.role === "ADMIN"}
                         deleteComment={deleteComment} />
            <div className="card mt-2"
                 hidden={loggedIn ? false : true}>
                <div className="card-header">
                    Write Comment
                </div> 
                <div className="card-body">
                    <div className="row">
                        <textarea className="form-control"
                                  rows="3"
                                  value={commmentContent}
                                  onChange={(event) => commentContentChanged(event.target.value)}></textarea>
                    </div>
                    <div className="row mt-2">
                        <button type="button" 
                                className="btn btn-info ml-auto"
                                onClick={() => postComment(loggedInUser, artist, commmentContent)}>Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ArtistCard;