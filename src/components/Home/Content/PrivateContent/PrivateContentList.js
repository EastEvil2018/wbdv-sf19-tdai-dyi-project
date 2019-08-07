import React from 'react';

export default class PrivateContentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">Your PlayList</h5>
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
        );
    }
}