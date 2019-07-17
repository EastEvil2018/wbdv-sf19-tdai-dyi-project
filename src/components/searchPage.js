import React from 'react';
import { SpotifyServiceClient } from '../services/SpotifyService';
import { Modal, Button } from 'react-bootstrap';
import { SpotifyType, SpotifyKey } from '../models/SearchType';
import { WebUtils } from '../utils/WebUtils';

//var Modal = require('react-bootstrap-modal')
export default class searchPage extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            type: SpotifyType.ALBUM,
            musics: [],
            open: false,
            selectedMusic: null
        }
        this.toggle = this.toggle.bind(this);
    }

    keywordChanged = event => {
        this.setState({
            keyword: event.target.value
        })
    }

    searchTypeChanged = event => {
        this.setState({
            type: event.target.value
        });
    }

    searchMusic = () => {
        if (WebUtils.isStringEmpty(this.state.keyword)) {
            return;
        }
        console.log(this.state);
        SpotifyServiceClient.getInstance().getAccessToken().then(
            token => {
                console.log(token);
                const accessToken = token['access_token'];
                SpotifyServiceClient.getInstance()
                    .search(this.state.keyword,
                            accessToken,
                            this.state.type).then(
                    results => {
                        console.log(results);
                        const items = results[SpotifyKey[this.state.type]]['items'];                     
                        this.setState({
                            musics : items
                        });
                    }
                );
            }
        )
    }

    openModal(id) {
        console.log(id);
        SpotifyServiceClient.getInstance().getAccessToken().then(
            token => {
                console.log(token);
                const accessToken = token['access_token'];
                SpotifyServiceClient.getInstance().searchMusicDetails(id, accessToken).then(
                    response => {
                        console.log("MUSIC ITEM", response)
                        this.state.selectedMusic = response;
                        this.setState({selectedMusic: response});
                        console.log(this.state)
                    }
                );
        });
        this.setState({ open: true })
        
    }

    toggle() {
        this.setState({modal: true});
    }

    closeModal = () => this.setState({ open: false })

    openModal1 = () => this.setState({ open: true })

    getArtistsListString(artists) {
        let artistListString = '';
        artists.map(artist => {
            artistListString += artist.name + ',';
        })
        artistListString = artistListString.substring(0, artistListString.length - 1);
        return artistListString;
    }
    render() {

        return(
            <div>
                <h1>Search Musics</h1>
                <div className="input-group">
                    <select id="type"
                            defaultValue="album"
                            value={this.state.type}
                            onChange={(event) => this.searchTypeChanged(event)}>
                        <option value={SpotifyType.ALBUM}>Album</option>
                        <option value={SpotifyType.TRACK}>Track</option>
                        <option value={SpotifyType.PLAYLIST}>Playlist</option>
                        <option value={SpotifyType.ARTIST}>Artist</option>
                    </select>
                    <input value={this.state.keyword}
                        onChange={this.keywordChanged}
                        className="form-control"
                        placeholder="keyword can not be empty"/>
                    <div className="input-graoup-append">
                        <button 
                            className="btn btn-primary"
                            onClick={this.searchMusic}>
                            Search
                        </button>
                    </div>
                </div>
                <ul className="list-group">
                {
                    this.state.musics.map(
                        (music) =>
                            <li key={music.id} 
                                className="list-group-item"
                                >
                                    {music.name}
                                    {/* onClick={event => this.searchMusicDetails(music.id)} */}
                                    {/* Modal */}
                                    <Button variant="primary" onClick={() => this.openModal(music.id)}>
                                        Launch demo modal
                                    </Button>

                                    <Modal 
                                        show={this.state.open && this.state.selectedMusic !== null} 
                                        onHide={this.closeModal}
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                        <Modal.Title>{this.state.selectedMusic? this.state.selectedMusic.name: 'Music Name'}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body 
                                            style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
                                        <div className="card">
                                            <ul className="list-group list-group-flush">
                                                <img
                                                    src={this.state.selectedMusic? this.state.selectedMusic.album.images[1].url: null}/>
                                                <li className="list-group-item">
                                                    Album Name: {this.state.selectedMusic? this.state.selectedMusic.album.name: 'Album Name'}
                                                </li>
                                                <li className="list-group-item">
                                                    Release Date: {this.state.selectedMusic? this.state.selectedMusic.album.release_date: 'Release Date'}
                                                </li>
                                                <li className="list-group-item">
                                                    Duration(ms): {this.state.selectedMusic? this.state.selectedMusic.duration_ms: 'Duration'}
                                                </li>
                                                <li className="list-group-item">
                                                    Artists: {this.state.selectedMusic? this.getArtistsListString(this.state.selectedMusic.artists): 'Artists'}
                                                </li>
                                                <li className="list-group-item">
                                                    Link: <a href={this.state.selectedMusic? this.state.selectedMusic.external_urls.spotify: 'https://open.spotify.com/'}>Spotify Link</a>
                                                </li>
                                            </ul>
                                        </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={this.closeModal}>
                                            Close
                                        </Button>
                                        </Modal.Footer>
                                    </Modal>
                            </li>
                    )
                }
                </ul>
                
            </div>
        )
    }
}