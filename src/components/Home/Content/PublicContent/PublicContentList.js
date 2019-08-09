import React from 'react';
import CommentCard from './CommentCard';

export default class PublicContentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="w-100 pl-0">
                <ol className="px-1 py-2">
                    <div class="card w-100">
                        <div class="card-body">
                            <h5 class="card-title">
                                <a target="_blank"
                                    href={"/details/track/" + "7JezmrZAhbArL0o9Qwa369"}>
                                    Rap God
                                </a>
                            </h5>
                            <p class="card-text">
                                "This is the most swag music I have ever heard."
                            </p>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Commented by <a href={"/profile/" + "333"}
                                                target="_blank">Di Yi</a> at 20:08 PM, August 2, 2019
                            </h6>
                        </div>
                    </div>
                </ol>
            </ul>
        );
    }
}