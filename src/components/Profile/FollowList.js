import React from 'react';

export const FollowList = ({follows}) => {

    return (
        <div class="row">
            <div class="card mb-3 w-100 border-0">
                <div class="card-header border-danger text-dark"
                    style={{borderWidth: "0.1rem", fontSize: "1.1rem",background:"#f5f5f5"}}>
                    <i class="fa fa-circle mr-2 text-danger"></i> 
                    Follows
                </div>
                <ul class="list-group list-group-flush">
                    {/* <li class="list-group-item">
                        <a href="/profile/333"
                           target="_blank">Di Yi</a>
                    </li>                     */}
                    {follows && follows.map(follow => {
                        return (
                            <li class="list-group-item">
                                <a href={"/profile/" + follow.id}
                                   target="_blank">{follow.username}</a>
                            </li>                             
                        );
                    })}
                </ul>
            </div>
        </div>   
    );
}

export default FollowList;
