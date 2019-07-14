import React from 'react';

export default class searchPage extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            musics: []
        }
    }

    keywordChanged = event =>
        this.setState({
            keyword: event.target.value
        })

    searchMusic = () => 
        fetch('')
            .then(response => response.json())
            .then(this.renderMusics)

    renderMusics = (search) =>
        this.setState({
            musics: search
        })

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
                        (music, index) =>
                            <li key={index} className="list-group-item">
                                {music.title}
                            </li>
                    )
                }
                </ul>
                
            </div>
        )
    }
}