import React from 'react';
import { SpotifyType } from '../../models/Search/SearchType';
import TrackCard from './Cards/TrackCard';
import AlbumCard from './Cards/AlbumCard';
import ArtistCard from './Cards/ArtistCard';

export default class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        var paths = props.location.pathname.split('/').splice(2);
        const type = paths[0];
        const id = paths[1];
        console.log(type + ":" + id);
        console.log(this.props);
        this.props.initState(type, id);
    }

    render() {
        if (this.props.product.type === "artist" && this.props.product.albums === undefined) {
            this.props.findAlbumsForArtist(this.props.product.id);
            return ("");
        }
        console.log("RENDER DETAIL : ", this.props);
        switch(this.props.product.type) {
            case SpotifyType.TRACK:
                return <TrackCard track={this.props.product}
                                  loggedIn={this.props.loggedIn}
                                  loggedInUser={this.props.loggedInUser} 
                                  likes={this.props.likes}
                                  comments={this.props.comments}
                                  postLike={this.props.postLike}
                                  postUnlike={this.props.postUnlike} 
                                  addToPlayList={this.props.addToPlayList}
                                  selectedPlayListChanged={this.props.selectedPlayListChanged}
                                  selectedPlayListId={this.props.selectedPlayListId}
                                  commmentContent={this.props.newCommentContent}
                                  commentContentChanged={this.props.commentContentChanged}
                                  postComment={this.props.postComment}
                                  deleteComment={this.props.deleteComment}/>
            case SpotifyType.ALBUM:
                return <AlbumCard   album={this.props.product}
                                    loggedIn={this.props.loggedIn}
                                    loggedInUser={this.props.loggedInUser} 
                                    likes={this.props.likes}
                                    comments={this.props.comments}
                                    postLike={this.props.postLike}
                                    postUnlike={this.props.postUnlike} 
                                    commmentContent={this.props.newCommentContent}
                                    commentContentChanged={this.props.commentContentChanged}
                                    postComment={this.props.postComment}
                                    deleteComment={this.props.deleteComment}/>
            case SpotifyType.ARTIST:
                return <ArtistCard  artist={this.props.product}
                                    loggedIn={this.props.loggedIn}
                                    loggedInUser={this.props.loggedInUser} 
                                    likes={this.props.likes}
                                    comments={this.props.comments}
                                    postLike={this.props.postLike}
                                    postUnlike={this.props.postUnlike} 
                                    commmentContent={this.props.newCommentContent}
                                    commentContentChanged={this.props.commentContentChanged}
                                    postComment={this.props.postComment}
                                    deleteComment={this.props.deleteComment}/>
            default:
                return (<div>The product type is not support</div>);
        }
    }

}