import React from 'react';
import { SpotifyServiceClient } from '../services/SpotifyService';

export default class searchPage extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            type: 'track',
            musics: []
        }
    }

    keywordChanged = event =>
        this.setState({
            keyword: event.target.value
        })

    searchMusic = () => {
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
                        const items = results['tracks']['items'];                     
                        this.setState({
                            musics : items
                        });
                    }
                );
            }
        )
    }

    searchMusicDetails(id) {
        console.log(id);
        SpotifyServiceClient.getInstance().getAccessToken().then(
            token => {
                console.log(token);
                const accessToken = token['access_token'];
                SpotifyServiceClient.getInstance().searchMusicDetails(id, accessToken).then(
                    response => {
                        console.log(response);
                    }
                );
        });
    }


    render() {
        return(
            <div>
                <h1>Search Musics</h1>
                <div className="input-group">
                    <input value={this.state.keyword}
                        onChange={this.keywordChanged}
                        className="form-control"
                        placeholder="keyword"/>
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
                                onClick={event => this.searchMusicDetails(music.id)}>
                                {music.name}
                            </li>
                    )
                }
                </ul>
                
            </div>
        )
    }
}