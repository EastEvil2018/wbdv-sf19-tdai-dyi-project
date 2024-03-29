import React from 'react';

export const FollowList = ({follows}) => {

    return (
        <div className="row">
            <div className="card mb-3 w-100 border-0">
                <div className="card-header border-danger text-dark"
                    style={{borderWidth: "0.1rem", fontSize: "1.1rem",background:"#f5f5f5"}}>
                    <i className="fa fa-circle mr-2 text-danger"></i> 
                    Follows
                </div>
                <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item">
                        <a href="/profile/333"
                           target="_blank">Di Yi</a>
                    </li>                     */}
                    {follows && follows.map(follow => {
                        return (
                            <li className="list-group-item" key={follow.id}>
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
