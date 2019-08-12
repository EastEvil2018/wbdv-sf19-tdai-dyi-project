import React from 'react';
import { SpotifyServiceClient } from '../../services/spotify/SpotifyService';
import { Button } from 'react-bootstrap';
import { SpotifyType, SpotifyKey } from '../../models/Search/SearchType';
import { WebUtils } from '../../utils/WebUtils';
import Track from './Details/Track';
import Album from './Details/Album';
import Artist from './Details/Artist';
import PlayList from './Details/PlayList';
import PaginationFooter from './PaginationFooter';


export default class SearchComponent extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return (
            <div class="container">
                <div class="row mt-4">
                    <div class="col-sm-4">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text">
                                    Type
                                </label>
                            </div>
                            <select class="custom-select"
                                    onChange={(event) => this.props.searchTypeChanged(event.target.value)}>                                
                                <option selected value={SpotifyType.TRACK}>Track</option>
                                <option value={SpotifyType.ALBUM}>Album</option>
                                <option value={SpotifyType.ARTIST}>Artist</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="input-group mb-3">
                            <input type="text" 
                                   id="keyword"
                                   class="form-control"
                                   onChange={(event) => this.props.keywordChanged(event.target.value)}/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" 
                                        type="button"
                                        onClick={(event) => this.props.search(this.props.searchType, this.props.keyword)}>
                                    Search
                                </button>
                            </div>
                        </div>                
                    </div>
                </div>

                <div class="card w-100 h-100 border-0">
                    <div class="card-header border-danger text-dark"
                        style={{borderWidth: "0.1rem", fontSize: "1.1rem",background:"#f5f5f5"}}>
                        <i class="fa fa-circle mr-2 text-danger"></i> 
                        Results
                    </div>
                    <ul class="list-group list-group-flush">
                        {this.renderResults()}
                    </ul>
                    {/* <div class="card-body">
                        <PaginationFooter pagination={this.props.pagination}/>
                    </div> */}
                </div>
            </div>
        );
    }

    renderResults() {
        console.log(this.props.results);
        return this.props.results.map(item => {
            return this.renderListItem(item);
        });
    }

    renderListItem(item) {
        return (
            <li class="list-group-item list-group-item-action"
                key={item.id}>
                <a href={"/details/" + item.type + "/" + item.id}
                   target="_blank">
                    {item.name}
                </a>
            </li>
        );
    }
}

// export default class SearchComponent extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             keyword: '',
//             type: SpotifyType.ALBUM,
//             items: [],
//             open: false,
//             selectedItem: null
//         }
//     }

//     keywordChanged = event => {
//         this.setState({
//             keyword: event.target.value
//         })
//     }

//     searchTypeChanged = event => {
//         this.setState({
//             type: event.target.value,
//             items: [],
//             open: false,
//             selectedItem: null
//         });
//     }

//     searchMusic = () => {
//         if (WebUtils.isStringEmpty(this.state.keyword)) {
//             return;
//         }
//         console.log(this.state);
//         SpotifyServiceClient.getInstance().getAccessToken().then(
//             token => {
//                 console.log(token);
//                 const accessToken = token['access_token'];
//                 SpotifyServiceClient.getInstance()
//                     .search(this.state.keyword,
//                             accessToken,
//                             this.state.type).then(
//                     results => {
//                         console.log("MUSIC RESULTS",results);
//                         const items = results[SpotifyKey[this.state.type]]['items'];                     
//                         this.setState({
//                             items : items
//                         });
//                     }
//                 );
//             }
//         )
//     }

//     openModal(id) {
//         console.log(id);
//         SpotifyServiceClient.getInstance().getAccessToken().then(
//             token => {
//                 console.log(token);
//                 const accessToken = token['access_token'];
//                 SpotifyServiceClient.getInstance().searchDetails(id, accessToken, SpotifyKey[this.state.type]).then(
//                     response => {
//                         console.log("DETAIL ITEM", response)
//                         this.state.selectedItem = response;
//                         this.setState({selectedMusic: response});
//                         console.log(this.state)
//                     }
//                 );
//         });
//         this.setState({ open: true })
        
//     }

//     closeModal = () => this.setState({ open: false })

//     getArtistsListString(artists) {
//         let artistListString = '';
//         artists.map(artist => {
//             artistListString += artist.name + ',';
//         })
//         artistListString = artistListString.substring(0, artistListString.length - 1);
//         return artistListString;
//     }
//     render() {

//         return(
//             <div>
//                 <h1>Search</h1>
//                 <div className="input-group">
//                     <select id="type"
//                             value={this.state.type}
//                             onChange={(event) => this.searchTypeChanged(event)}>
//                         <option value={SpotifyType.ALBUM}>Album</option>
//                         <option value={SpotifyType.TRACK}>Track</option>
//                         <option value={SpotifyType.PLAYLIST}>Playlist</option>
//                         <option value={SpotifyType.ARTIST}>Artist</option>
//                     </select>
//                     <input value={this.state.keyword}
//                         onChange={this.keywordChanged}
//                         className="form-control"
//                         placeholder="keyword can not be empty"/>
//                     <div className="input-graoup-append">
//                         <button 
//                             className="btn btn-primary"
//                             onClick={this.searchMusic}>
//                             Search
//                         </button>
//                     </div>
//                 </div>
//                 <ul className="list-group">
//                 {
//                     this.state.items.map(
//                         (item) =>
//                             <li key={item.id} 
//                                 className="list-group-item"
//                                 >
//                                     <span>{item.name} </span>
//                                     <Button 
//                                         variant="primary" 
//                                         onClick={() => this.openModal(item.id)}
//                                         style={{'float': 'right'}}>
//                                         {this.state.type} Detail
//                                     </Button>
//                                     {
//                                         this.state.type === SpotifyType.ALBUM &&
//                                         <Album
//                                             open={this.state.open}
//                                             closeModal={this.closeModal}
//                                             selectedAlbum={this.state.selectedItem}
//                                             getArtistsListString={this.getArtistsListString}
//                                         >
//                                         </Album>
//                                     }
//                                     {
//                                         this.state.type === SpotifyType.ARTIST &&
//                                         <Artist
//                                             open={this.state.open}
//                                             closeModal={this.closeModal}
//                                             selectedArtist={this.state.selectedItem}
//                                         >
//                                         </Artist>
//                                     }
//                                     {
//                                         this.state.type === SpotifyType.TRACK &&
//                                         <Track
//                                             open={this.state.open}
//                                             closeModal={this.closeModal}
//                                             selectedMusic={this.state.selectedItem}
//                                             getArtistsListString={this.getArtistsListString}
//                                         >
//                                         </Track>
                          
                                        
//                                     }
//                                     {
//                                         this.state.type === SpotifyType.PLAYLIST &&
//                                         <PlayList
//                                             open={this.state.open}
//                                             closeModal={this.closeModal}
//                                             selectedPlaylist={this.state.selectedItem}
//                                         >
//                                         </PlayList>
//                                     }
//                             </li>
//                     )
//                 }
//                 </ul>
                
//             </div>
//         )
//     }
// }