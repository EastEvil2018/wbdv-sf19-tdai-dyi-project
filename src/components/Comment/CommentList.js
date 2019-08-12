import React from 'react';
import CommentCard from './CommentCard';

export const CommentList = ({title, loggedInUser, comments, showProductName, showCommenterName, adminMode, deleteComment}) => {
    console.log("Render CommentList : ", comments);
    return (
        <div class="card mt-2 border-0">
            <div class="card-header border-danger text-dark"
                 style={{borderWidth: "0.1rem", fontSize: "1.1rem", background:"#f5f5f5"}}>
                <i class="fa fa-circle mr-2 text-danger"></i> 
                {title}
            </div>
            <ul className="w-100 p-0">
                {/* <ol className="px-1 py-2">
                    <div class="card w-100">
                        <div class="card-body">
                            <h5 class="card-title" 
                                hidden={showProductName ? false : true}>
                                <a href={"/details/track/7JezmrZAhbArL0o9Qwa369"}
                                    class="card-link"
                                    target="_blank">
                                    Rap God
                                </a>
                            </h5>
                            <p class="card-text">"This is the most swag music I have ever heard."</p>
                            <h6 class="card-subtitle mb-2 text-muted">
                                <a href="/profile/333"
                                   hidden={showCommenterName ? false : true}
                                   class="mx-1"
                                   target="_blank">Di Yi</a> 
                                Commented at 20:08 PM, August 2, 2019
                            </h6>
                        </div>
                        <div class="card-footer text-right">
                            <button type="button" 
                                    class="btn btn-primary align-right">
                                    Delete
                            </button>
                        </div>
                    </div>
                </ol> */}
                {comments && comments.map(comment => {
                    return (
                        <ol className="px-1 py-2">
                            <CommentCard loggedInUser={loggedInUser}
                                         comment={comment}
                                         showCommenterName={showCommenterName} 
                                         showProductName={showProductName}
                                         adminMode={adminMode}
                                         deleteComment={deleteComment}/>
                        </ol>
                    );
                })}
            </ul>   
        </div>         
    );
}

export default CommentList;