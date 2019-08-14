import React from 'react';
import '../../../css/components/Detail/Carousels/ArtistCarousel.css';
import LikeList from '../../Profile/LikeList';
import CommentList from '../../Comment/CommentList';
import ArtistCarousel from '../Carousels/ArtistCarousel';
import AlbumCarousel from '../Carousels/AlbumCarousel';
import { SpotifyServiceClient } from '../../../services/spotify/SpotifyService';
import TrackCarousel from '../Carousels/TrackCarousel';

const AlbumCard = ({album, 
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
    console.log("Render AlbumCard : ", likes, loggedInUser, album, commmentContent);
    const signal = loggedInUser.favorites && loggedInUser.favorites.find(like => 
        like.productType === album.type && like.productId === album.id
    )

    const hasLiked = signal !== undefined;

    console.log("Has Likes : ", hasLiked);

    return (
        <div className="container">
            <div className="card border-0">
                <div className="card-header border-danger text-dark"
                    style={{borderWidth: "0.1rem", fontSize: "1.1rem", background:"#f5f5f5"}}>
                    <i className="fa fa-circle mr-2 text-danger"></i> 
                    Album
                </div>
                <div className="card-body container">
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Name
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            {album.name}
                        </div>                                       
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Profile
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <img className="d-block rounded-circle mx-auto"
                                    src={`${album.images[0].url}`}
                                    style={{width: "6rem", height: "6rem"}}/>
                        </div>                                       
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Artist
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <ArtistCarousel artists={album.artists}/>
                        </div>                                       
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Tracks
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <TrackCarousel tracks={album.tracks.items}/>
                        </div>                                       
                    </div>
                    <div className="row">
                        <div className="col-sm-2 text-center">
                            Release Date
                        </div>
                        <div className="col-sm-10 text-center">
                            {album.release_date}
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Preview
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <iframe src={"https://open.spotify.com/embed/album/" + album.id}
                                    width="300" 
                                    height="80" 
                                    frameborder="0" 
                                    allowtransparency="true" 
                                    allow="encrypted-media">
                            </iframe>
                        </div>    
                    </div>
                </div>
                <div className="card-footer"
                     hidden={loggedIn ? false : true}>
                    <div className="input-group">
                        <div className="input-group-append">
                            <button type="button" 
                                    className="btn btn-primary"
                                    hidden={hasLiked ? true : false}
                                    onClick={(event) => postLike(loggedInUser, album)}>
                                Like
                            </button>
                            <button type="button" 
                                    className="btn btn-primary"
                                    hidden={hasLiked ? false : true}
                                    onClick={(event) => postUnlike(loggedInUser, album)}>
                                UnLike
                            </button>
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
                                onClick={() => postComment(loggedInUser, album, commmentContent)}>Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default AlbumCard;