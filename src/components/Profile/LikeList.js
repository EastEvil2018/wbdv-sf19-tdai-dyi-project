import React from 'react';
import LikeCard from './LikeCard';

export default class LikeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card mt-2">
                <div class="card-header">
                    Likes
                </div>
                <div class="card-body row">
                    <LikeCard />
                    <LikeCard />
                    <LikeCard />
                    <LikeCard />
                    <LikeCard />
                    <LikeCard />
                    <LikeCard />
                    <LikeCard />
                </div>
            </div>
        );
    }
}