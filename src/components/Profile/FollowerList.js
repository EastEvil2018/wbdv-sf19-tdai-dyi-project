import React from 'react';

export default class FollowerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div class="row">
                <div class="card mb-3 w-100">
                    <div class="card-header">
                        Followers
                        <a href="#" 
                        class="float-right">More</a>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a href="#">Luqi Wang</a>
                        </li>                    
                        <li class="list-group-item">
                            <a href="#">Eason</a>
                        </li>                    
                        <li class="list-group-item">
                            <a href="#">EastEavil95</a>
                        </li>                    
                        <li class="list-group-item">
                            <a href="#">Peng Tong</a>
                        </li>
                    </ul>
                </div>
            </div>   
        );
    }
}