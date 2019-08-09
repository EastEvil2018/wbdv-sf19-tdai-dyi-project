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
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a href={this.props.history + "/playlist/" + "333"}>list 1</a>
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
                        <li class="list-group-item">
                            <div class="row">
                                <div class="col-sm-8">
                                    <input class="form-control"/>
                                </div>
                                <div class="col-sm-4">
                                    <button type="button" 
                                            class="btn btn-primary ml-auto">
                                        Create
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>            
        );
    }
}