import React from 'react';

export const FollowerList = ({followers}) => {
    return (
        <div class="row">
            <div class="card mb-3 w-100">
                <div class="card-header">
                    Followers
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href="/profile/333"
                           target="_blank">Luqi Wang</a>
                    </li>                    
                    {followers && followers.map(follower => {
                        return (
                            <li class="list-group-item">
                                <a href={"/profile/" + follower.id}
                                   target="_blank">{follower.name}</a>
                            </li>  
                        );
                    })}
                </ul>
            </div>
        </div>   
    );
}

export default FollowerList;
