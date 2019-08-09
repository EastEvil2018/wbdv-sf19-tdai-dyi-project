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
        this.props.initState(type, id);
    }

    render() {
        switch(this.props.product.type) {
            case SpotifyType.TRACK:
                return <TrackCard product={this.props.product}/>
            case SpotifyType.ALBUM:
                return <AlbumCard product={this.props.product}/>
            case SpotifyType.ARTIST:
                return <ArtistCard product={this.props.product}/>
            default:
                return (<div>The product type is not support</div>);
        }
    }

}