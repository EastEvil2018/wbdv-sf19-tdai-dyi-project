import React from 'react';
import {WebUtils} from '../../utils/WebUtils';

const CommentCard = ({loggedInUser, comment, showProductName, showCommenterName, adminMode, deleteComment}) => {
    return (
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title"
                    hidden={showProductName ? false : true}>
                    <a href={"/details/" + comment.productType + "/" + comment.productId}
                        target="_blank">
                        {comment.productName}
                    </a>
                </h5>
                <p class="card-text">
                    {comment.comment}
                </p>
                <h6 class="card-subtitle mb-2 text-muted">
                    <a href={"/profile/" + comment.userId}
                    class="mx-1"
                    hidden={showCommenterName ? false : true}
                    target="_blank">{comment.username}</a> 
                    Commented at {WebUtils.timeTransfer(comment.createTime)}
                </h6>
            </div>
            <div class="card-footer 
                        text-right"
                 hidden={adminMode ? false : true}>
                <button type="button" 
                        class="btn btn-primary align-right"
                        onClick={(event) => deleteComment(loggedInUser, comment)}>
                        Delete
                </button>
            </div>
        </div>
    );
}

export default CommentCard;