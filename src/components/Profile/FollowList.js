import React from 'react';

export const FollowList = ({follows}) => {

    return (
        <div class="row">
            <div class="card mb-3 w-100">
                <div class="card-header">
                    Follows
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <a href="/profile/333"
                           target="_blank">Di Yi</a>
                    </li>                    
                    {follows && follows.map(follow => {
                        return (
                            <li class="list-group-item">
                                <a href={"/profile/" + follow.id}
                                   target="_blank">{follow.name}</a>
                            </li>                             
                        );
                    })}
                </ul>
            </div>
        </div>   
    );
}

export default FollowList;
