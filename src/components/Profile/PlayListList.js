import React from 'react';

export default class PlayListList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class="row">
                <div class="card mb-3 w-100">
                    <div class="card-header">
                        PlayLists
                        <a href="#" 
                        class="float-right">More</a>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a href="#">list 1</a>
                        </li>                    
                        <li class="list-group-item">
                            <a href="#">list 2</a>
                        </li>                    
                        <li class="list-group-item">
                            <a href="#">list 3</a>
                        </li>                    
                        <li class="list-group-item">
                            <a href="#">list 4</a>
                        </li>
                    </ul>
                </div>
            </div>            
        );
    }
}