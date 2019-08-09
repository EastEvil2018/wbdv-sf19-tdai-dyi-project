import React from 'react';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card mt-2">
                <div class="card-header">
                    Comments
                </div>
                <ul className="w-100 p-0">
                    <ol className="px-1 py-2">
                        <div class="card w-100">
                            <div class="card-body">
                                <h5 class="card-title"><a href="#">Rap God</a></h5>
                                <p class="card-text">"This is the most swag music I have ever heard."</p>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    Commented at 20:08 PM, August 2, 2019
                                </h6>
                            </div>
                        </div>
                    </ol>
                    <ol className="px-1 py-2">
                        <div class="card w-100">
                            <div class="card-body">
                                <h5 class="card-title"><a href="#">Album</a></h5>
                                <p class="card-text">"This is the most swag music I have ever heard."</p>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    Commented at 20:08 PM, August 2, 2019
                                </h6>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </ol>                
                    <ol className="px-1 py-2">
                        <div class="card w-100">
                            <div class="card-body">
                                <h5 class="card-title"><a href="#">Artist</a></h5>
                                <p class="card-text">"This is the most swag music I have ever heard."</p>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    Commented at 20:08 PM, August 2, 2019
                                </h6>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </ol>
                </ul>   
            </div>         
        );
    }
}