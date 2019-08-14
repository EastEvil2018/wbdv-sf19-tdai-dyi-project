import React from 'react';

export default class PlayListComponent extends React.Component {
    constructor(props) {
        super(props);
        const paths = props.location.pathname.split('/').splice(1);
        const listId = paths[1];
        console.log("Check playlist:", listId);
        this.props.getPlayListById(listId);
    }
    render() {
        console.log("RENER PLAY LIST COMPONENT : ,", this.props)
        return (
            <div className="container">
                <div className="card border-0">
                    <div className="card-header border-danger text-dark"
                        style={{borderWidth: "0.1rem", fontSize: "1.1rem", background:"#f5f5f5"}}>
                        <i className="fa fa-circle mr-2 text-danger"></i> 
                        PlayList&nbsp;:&nbsp;{this.props.playlist.name}
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {/* <li className="list-group-item">
                                <a href={"/details/track/" + "7JezmrZAhbArL0o9Qwa369"}
                                    target="_blank">
                                    Cras justo odio
                                </a>
                            </li> */}
                            {this.props.playlist.tracks && this.props.playlist.tracks.map(track => {
                                return (
                                    <li className="list-group-item">
                                        <a href={"/details/track/" + track.id}
                                            target="_blank">
                                            {track.name}
                                        </a>
                                    </li>                               
                                );
                            })}
                        </ul>                
                    </div> 
                </div>
            </div>
        );
    }
}


