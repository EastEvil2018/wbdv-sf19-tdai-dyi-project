import React from 'react';
import '../../../css/components/Detail/Carousels/ArtistCarousel.css';
import LikeList from '../../Profile/LikeList';
import CommentList from '../../Comment/CommentList';
import ArtistCarousel from '../Carousels/ArtistCarousel';
import AlbumCarousel from '../Carousels/AlbumCarousel';

const TrackCard = ({track, 
                    loggedIn, 
                    loggedInUser, 
                    likes,
                    comments,
                    postLike, 
                    postUnlike, 
                    addToPlayList, 
                    selectedPlayListChanged,
                    selectedPlayListId,
                    commmentContent,
                    commentContentChanged, 
                    postComment,
                    deleteComment}) => {
    console.log("Render TrackCard : ", likes, loggedInUser, track, commmentContent);
    const signal = loggedInUser.favorites && loggedInUser.favorites.find(like => 
        like.productType === track.type && like.productId === track.id
    )

    const hasLiked = signal !== undefined;

    console.log("Has Likes : ", hasLiked);

    return (
        <div>
            <div class="card">
                <div class="card-header">
                    Track
                </div>
                <div class="card-body container">
                    <div class="row my-2">
                        <div class="col-sm-2 text-center">
                            Name
                        </div>
                        <div class="col-sm-10 text-center">
                            {track.name}
                        </div>
                    </div>
                    <div class="row my-2">
                        <div class="col-sm-2 text-center my-auto">
                            Artist
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            <ArtistCarousel artists={track.artists}/>
                        </div>                                       
                    </div>
                    <div class="row my-2">
                        <div class="col-sm-2 text-center my-auto">
                            Ablum
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            <AlbumCarousel albums={[track.album]}/>
                        </div>    
                    </div>
                    <div class="row my-2">
                        <div class="col-sm-2 text-center my-auto">
                            Preview
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            <iframe src={"https://open.spotify.com/embed/track/" + track.id}
                                    width="300" 
                                    height="80" 
                                    frameborder="0" 
                                    allowtransparency="true" 
                                    allow="encrypted-media">
                            </iframe>
                        </div>    
                    </div>
                    {/* <div class="row my-2">
                        <div class="col-sm-2 text-center my-auto">
                            Check on Spotify
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            <a href={track.external_urls.spotify} 
                                target="_blank">
                                {track.external_urls.spotify}
                            </a>
                        </div>    
                    </div> */}
                    <div class="row">
                        <div class="col-sm-2 text-center">
                            Release Date
                        </div>
                        <div class="col-sm-10 text-center">
                            {track.album.release_date}
                        </div>
                    </div>
                </div>
                <div class="card-footer"
                     hidden={loggedIn ? false : true}>
                    <div class="input-group">
                        <select class="custom-select mr-2"
                                onChange={(event) => selectedPlayListChanged(event.target.value)}>
                            <option selected value="">Select a Playlist</option>
                            {loggedInUser.playlists.map(playlist => {
                                return (
                                    <option value={playlist.id}>{playlist.name}</option>
                                );
                            })}
                        </select>
                        <div class="input-group-append mr-2">
                            <button class="btn btn-outline-secondary" 
                                    type="button"
                                    onClick={() => 
                                        addToPlayList(loggedInUser, track, selectedPlayListId)}>
                                Add To PlayList
                            </button>
                        </div>
                        <div class="input-group-append">
                            <button type="button" 
                                    class="btn btn-primary"
                                    hidden={hasLiked ? true : false}
                                    onClick={(event) => postLike(loggedInUser, track)}>
                                Like
                            </button>
                            <button type="button" 
                                    class="btn btn-primary"
                                    hidden={hasLiked ? false : true}
                                    onClick={(event) => postUnlike(loggedInUser, track)}>
                                UnLike
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <LikeList likes={likes} showProfile={true}/>
            <CommentList loggedInUser={loggedInUser}
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
                                onClick={() => postComment(loggedInUser, track, commmentContent)}>Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default TrackCard;