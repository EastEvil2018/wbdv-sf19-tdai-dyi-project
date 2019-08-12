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
        <div>
            <div class="card">
                <div class="card-header">
                    Artist
                </div>
                <div class="card-body container">
                    <div class="row my-2">
                        <div class="col-sm-2 text-center my-auto">
                            Name
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            {artist.name}
                        </div>                                       
                    </div>
                    <div class="row my-2">
                        <div class="col-sm-2 text-center my-auto">
                            Profile
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            <img className="d-block rounded-circle mx-auto"
                                    src={artist.images[0] ? `${artist.images[0].url}` : require('../../../images/default-singer-profile.png')}
                                    alt="First slide"
                                    style={{width: "6rem", height: "6rem"}}/>
                        </div>                                       
                    </div>
                    <div class="row my-2">
                        <div class="col-sm-2 text-center my-auto">
                            Ablum
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            <AlbumCarousel albums={artist.albums.items}/>
                        </div>    
                    </div>
                    <div class="row my-2">
                        <div class="col-sm-2 text-center my-auto">
                            Preview
                        </div>
                        <div class="col-sm-10 px-0 text-center">
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
                <div class="card-footer"
                     hidden={loggedIn ? false : true}>
                    <div class="input-group">
                        <div class="input-group-append">
                            <button type="button" 
                                    class="btn btn-primary"
                                    hidden={hasLiked ? true : false}
                                    onClick={(event) => postLike(loggedInUser, artist)}>
                                Like
                            </button>
                            <button type="button" 
                                    class="btn btn-primary"
                                    hidden={hasLiked ? false : true}
                                    onClick={(event) => postUnlike(loggedInUser, artist)}>
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
            <div class="card mt-2"
                 hidden={loggedIn ? false : true}>
                <div class="card-header">
                    Write Comment
                </div> 
                <div class="card-body">
                    <div class="row">
                        <textarea class="form-control"
                                  rows="3"
                                  value={commmentContent}
                                  onChange={(event) => commentContentChanged(event.target.value)}></textarea>
                    </div>
                    <div class="row mt-2">
                        <button type="button" 
                                class="btn btn-info ml-auto"
                                onClick={() => postComment(loggedInUser, artist, commmentContent)}>Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ArtistCard;