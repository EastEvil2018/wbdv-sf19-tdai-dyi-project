import React from 'react';

export default class PrivateContentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card w-100">
                <div class="card-header">
                    Your playList
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href={"/profile/" + this.props.id + "/playlist/" + "333"}>list 1</a>
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