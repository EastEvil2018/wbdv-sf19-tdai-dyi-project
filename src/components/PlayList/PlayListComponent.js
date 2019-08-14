import React from 'react';
import { Button } from 'react-bootstrap';

export default class PlayListComponent extends React.Component {
    constructor(props) {
        super(props);
        const paths = props.location.pathname.split('/').splice(1);
        const listId = paths[1];
        console.log("Check playlist:", listId);
        this.props.getPlayListById(listId);
    }

    hasDeleteItemAccess() {
        return (this.props.loggedIn && this.props.loggedInUser.id === this.props.playlist.userId);
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
                                    <li className="list-group-item align-middle">
                                        {/* <a href={"/details/track/" + track.id}
                                            target="_blank"
                                            className="h-100">
                                            {track.name}
                                        </a>
                                        <Button variant="warning"
                                                className="float-right">
                                            Delete
                                        </Button> */}
                                        <div className="row">
                                            <div className="col my-auto">
                                                <a href={"/details/track/" + track.id}
                                                target="_blank">
                                                    {track.name}
                                                </a>
                                            </div>
                                            <div className="col text-right my-auto"
                                                hidden={this.hasDeleteItemAccess() ? false : true}
                                                onClick={() => this.props.DeleteAnItemInPlayList(this.props.playlist, track.id)}>
                                                <Button variant="warning"
                                                        className="float-right">
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
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


