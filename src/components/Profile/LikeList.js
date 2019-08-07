import React from 'react';
import LikeCard from './LikeCard';

export default class LikeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
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