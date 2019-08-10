import React from 'react';

const CommentCard = ({comment, showProductName, showCommenterName, adminMode, deleteComment}) => {
    return (
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title"
                    hidden={showProductName ? false : true}>
                    <a href={"/details/" + comment.product.type + "/" + comment.product.id}
                        target="_blank">
                        {comment.product.name}
                    </a>
                </h5>
                <p class="card-text">
                    {comment.text}
                </p>
                <h6 class="card-subtitle mb-2 text-muted">
                    <a href="/profile/333"
                    class="mx-1"
                    hidden={showCommenterName ? false : true}
                    target="_blank">{comment.user.name}</a> 
                    Commented at {comment.time}
                </h6>
            </div>
            <div class="card-footer 
                        text-right"
                 hidden={adminMode ? false : true}>
                <button type="button" 
                        class="btn btn-primary align-right"
                        onClick={(event) => deleteComment(comment.id)}>
                        Delete
                </button>
            </div>
        </div>
    );
}

export default CommentCard;