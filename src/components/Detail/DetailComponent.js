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
        switch(this.props.product.type) {
            case SpotifyType.TRACK:
                return <TrackCard track={this.props.product}
                                  loggedIn={this.props.loggedIn}
                                  loggedInUser={this.props.loggedInUser} 
                                  like={this.props.postLike}
                                  unLike={this.props.postUnlike} 
                                  addToPlayList={this.props.addToPlayList}
                                  selectedPlayListChanged={this.props.selectedPlayListChanged}
                                  selectedPlayListId={this.props.selectedPlayListId}
                                  commmentContent={this.props.newCommmentContent}
                                  commentContentChanged={this.props.newCommentContentChanged}
                                  postComment={this.props.postNewComment}
                                  deleteComment={this.props.deleteComment}/>
            case SpotifyType.ALBUM:
                return <AlbumCard product={this.props.product}/>
            case SpotifyType.ARTIST:
                return <ArtistCard product={this.props.product}/>
            default:
                return (<div>The product type is not support</div>);
        }
    }

}