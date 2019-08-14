import React from 'react';

export const FollowerList = ({followers}) => {
    return (
        <div className="row">
            <div className="card mb-3 w-100  border-0">
                <div className="card-header border-danger text-dark"
                    style={{borderWidth: "0.1rem", fontSize: "1.1rem",background:"#f5f5f5"}}>
                    <i className="fa fa-circle mr-2 text-danger"></i> 
                    Followers
                </div>
                <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item">
                        <a href="/profile/333"
                           target="_blank">Luqi Wang</a>
                    </li>                     */}
                    {followers && followers.map(follower => {
                        return (
                            <li className="list-group-item" key={follower.id}>
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
