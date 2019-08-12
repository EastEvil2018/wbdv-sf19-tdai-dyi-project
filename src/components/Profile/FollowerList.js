import React from 'react';

export const FollowerList = ({followers}) => {
    return (
        <div class="row">
            <div class="card mb-3 w-100  border-0">
                <div class="card-header border-danger text-dark"
                    style={{borderWidth: "0.1rem", fontSize: "1.1rem",background:"#f5f5f5"}}>
                    <i class="fa fa-circle mr-2 text-danger"></i> 
                    Followers
                </div>
                <ul class="list-group list-group-flush">
                    {/* <li class="list-group-item">
                        <a href="/profile/333"
                           target="_blank">Luqi Wang</a>
                    </li>                     */}
                    {followers && followers.map(follower => {
                        return (
                            <li class="list-group-item">
                                <a href={"/profile/" + follower.id}
                                   target="_blank">{follower.username}</a>
                            </li>  
                        );
                    })}
                </ul>
            </div>
        </div>   
    );
}

export default FollowerList;
