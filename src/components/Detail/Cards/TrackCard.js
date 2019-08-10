import React from 'react';
import {Carousel, Dropdown} from 'react-bootstrap';
import '../../../css/components/Detail/Carousels/ArtistCarousel.css';
import LikeList from '../../Profile/LikeList';
import CommentList from '../../Comment/CommentList';

const TrackCard = ({track, 
                    loggedIn, 
                    loggedInUser, 
                    likes,
                    comments,
                    like, 
                    unLike, 
                    addToPlayList, 
                    selectedPlayListChanged,
                    selectedPlayListId,
                    commmentContent,
                    commentContentChanged, 
                    postComment,
                    deleteComment}) => {
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
                    <div class="row">
                        <div class="col-sm-2 text-center my-auto">
                            Artist
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            <ArtistCarousel artists={track.artists}/>
                        </div>                                       
                    </div>
                </div>
                <div class="card-footer">
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
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" 
                                    type="button"
                                    onClick={() => 
                                        addToPlayList(loggedInUser.id, track.id, selectedPlayListId)}>
                                Add To PlayList
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <LikeList likes={likes}/>
            <CommentList comments={comments} 
                         showCommenterName={true} 
                         showProductName={false}
                         adminMode={loggedIn && loggedInUser.role === "admin"}
                         deleteComment={deleteComment} />
            <div class="card mt-2">
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


const ArtistCarousel = ({artists}) => {
    return (
        <div class="w-100">
        <Carousel indicators={false}>
            <Carousel.Item>
                <div class="row my-3">
                    <img className="d-block rounded-circle mx-auto"
                        src={require('../../../images/snoop-dogg.jpg')}
                        alt="First slide"
                        style={{width: "6rem", height: "6rem"}}/>
                </div>
                <div class="row my-3">
                    <a class="text-center w-100" href="#">
                        Snoopy Doggy
                    </a>
                </div>
            </Carousel.Item>
            {artists.map(artist => {
                return (
                    <Carousel.Item>
                        <div class="row my-3">
                            <img className="d-block rounded-circle mx-auto"
                                src={require('../../../images/snoop-dogg.jpg')}
                                alt="First slide"
                                style={{width: "6rem", height: "6rem"}}/>
                        </div>
                        <div class="row my-3">
                            <a class="text-center w-100" 
                               href={"/details/artist/" + artist.id}
                               target="_blank">
                                {artist.name}
                            </a>
                        </div>
                    </Carousel.Item>                    
                );
            })}
        </Carousel>
        </div>
    );
}

export default TrackCard;