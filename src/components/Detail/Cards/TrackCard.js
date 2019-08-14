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
                    deleteComment,
                    updateComment}) => {
    console.log("Render TrackCard : ", likes, loggedInUser, track, commmentContent);
    const signal = loggedInUser.favorites && loggedInUser.favorites.find(like => 
        like.productType === track.type && like.productId === track.id
    )

    const hasLiked = signal !== undefined;

    console.log("Has Likes : ", hasLiked);

    return (
        <div className="container">
            <div className="input-group mt-4"
                hidden={loggedIn ? false : true}
                style={{background:"#f5f5f5"}}>
                <select className="custom-select mr-2"
                        onChange={(event) => selectedPlayListChanged(event.target.value)}>
                    <option selected value="">Select a Playlist</option>
                    {loggedInUser.playlists.map(playlist => {
                        return (
                            <option value={playlist.id}>{playlist.name}</option>
                        );
                    })}
                </select>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" 
                            type="button"
                            onClick={() => 
                                addToPlayList(loggedInUser, track, selectedPlayListId)}>
                        Add To PlayList
                    </button>
                </div>
            </div>
            <div className="card border-0">
                <div className="card-header border-danger text-dark"
                        style={{borderWidth: "0.1rem", fontSize: "1.1rem", background:"#f5f5f5"}}>
                        <div className="row">
                            <div className="col my-auto">
                                <i className="fa fa-circle mr-2 text-danger"></i> 
                                Track
                            </div>
                            <div className="col text-right"
                                  hidden={loggedIn ? false : true}>
                                <button type="button" 
                                        className="btn btn-outline-primary"
                                        hidden={hasLiked ? true : false}
                                        onClick={(event) => postLike(loggedInUser, track)}>
                                    Like
                                </button>
                                <button type="button" 
                                        className="btn btn-outline-primary"
                                        hidden={hasLiked ? false : true}
                                        onClick={(event) => postUnlike(loggedInUser, track)}>
                                    UnLike
                                </button>
                            </div>
                        </div>
                </div>
                <div className="card-body container">
                    <div className="row my-2">
                        <div className="col-sm-2 text-center">
                            Name
                        </div>
                        <div className="col-sm-10 text-center">
                            {track.name}
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Artist
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <ArtistCarousel artists={track.artists}/>
                        </div>                                       
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Ablum
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <AlbumCarousel albums={[track.album]}/>
                        </div>    
                    </div>
                    <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Preview
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <iframe src={"https://open.spotify.com/embed/track/" + track.id}
                                    width="300" 
                                    height="80" 
                                    frameborder="0" 
                                    allowtransparency="true" 
                                    allow="encrypted-media">
                            </iframe>
                        </div>    
                    </div>
                    {/* <div className="row my-2">
                        <div className="col-sm-2 text-center my-auto">
                            Check on Spotify
                        </div>
                        <div className="col-sm-10 px-0 text-center">
                            <a href={track.external_urls.spotify} 
                                target="_blank">
                                {track.external_urls.spotify}
                            </a>
                        </div>    
                    </div> */}
                    <div className="row">
                        <div className="col-sm-2 text-center">
                            Release Date
                        </div>
                        <div className="col-sm-10 text-center">
                            {track.album.release_date}
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
                         deleteComment={deleteComment}
                         updateComment={updateComment}/>
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
                                onClick={() => postComment(loggedInUser, track, commmentContent)}>Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default TrackCard;