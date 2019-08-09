import React from 'react';

export default class PlayListCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card">
                <div class="card-header">
                    List 1
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href={"/details/track/" + "7JezmrZAhbArL0o9Qwa369"}>
                                Cras justo odio
                            </a>
                        </li>
                        <li class="list-group-item">
                            <a href={"/details/track/" + "7JezmrZAhbArL0o9Qwa369"}>
                                Cras justo odio
                            </a>
                        </li>                        
                        <li class="list-group-item">
                            <a href={"/details/track/" + "7JezmrZAhbArL0o9Qwa369"}>
                                Cras justo odio
                            </a>
                        </li>                        
                        <li class="list-group-item">
                            <a href={"/details/track/" + "7JezmrZAhbArL0o9Qwa369"}>
                                Cras justo odio
                            </a>
                        </li>
                    </ul>                
                </div> 
            </div>
        );
    }
}