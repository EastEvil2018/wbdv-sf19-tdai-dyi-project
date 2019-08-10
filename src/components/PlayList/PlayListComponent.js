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
        return (
            <div class="card">
                <div class="card-header">
                    {this.props.playlist.name}
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href={"/details/track/" + "7JezmrZAhbArL0o9Qwa369"}
                                target="_blank">
                                Cras justo odio
                            </a>
                        </li>
                        {this.props.playlist.list.map(track => {
                            return (
                                <li class="list-group-item">
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
        );
    }
}


