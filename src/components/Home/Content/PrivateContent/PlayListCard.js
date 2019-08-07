import React from 'react';

const PlayListCard = ({}) => {
    return (
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title"><a href="#">Rap God</a></h5>
                <p class="card-text">"This is the most swag music I have ever heard."</p>
                <h6 class="card-subtitle mb-2 text-muted">
                    Commented by <a href="#">Di Yi</a> at 20:08 PM, August 2, 2019
                </h6>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    );
}

export default PlayListCard;