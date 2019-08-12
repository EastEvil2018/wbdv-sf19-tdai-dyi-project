import React from 'react';
import {WebUtils} from '../../utils/WebUtils';

{/* <div class="col">
<a href={"/details/" + comment.productType + "/" + comment.productId}
    class="text-center w-100"
    target="_blank">
    <img className="d-block rounded-circle mx-auto"
        src={require('../../images/default-track-profile.png')}
        alt="First slide"
        style={{width: "6rem", height: "6rem"}}/>
</a>                            
</div> */}
const CommentCard = ({loggedInUser, comment, showProductName, showCommenterName, adminMode, deleteComment}) => {
    return (
        <div class="card w-100 border-top-0 border-left-0 border-right-0">
            <div class="card-body p-0"
                 style={{height: "10rem"}}>
                <div class="row h-100 mx-0">
                    <div class="col-3 my-auto text-center"
                         hidden={showProductName ? false : true}>
                        <a href={"/details/" + comment.productType + "/" + comment.productId}
                            class=""
                            target="_blank"
                            hidden={showProductName ? false : true}>
                            <img className="rounded-circle"
                                src={comment.productImageUrl ? `${comment.productImageUrl}` : require('../../images/default-track-profile.png')}
                                style={{width: "4rem", height: "4rem"}}/>
                        </a> 
                        <p class="my-0">
                            <a href={"/details/" + comment.productType + "/" + comment.productId}
                                class=""
                                target="_blank">
                                {comment.productType&&comment.productType.toUpperCase()}&nbsp;:&nbsp;{comment.productName}
                            </a>
                        </p>
                    </div>
                    <div class="col my-auto ml-4">
                        <div class="row">
                            <a href={"/profile/" + comment.userId}
                                class=""
                                hidden={showCommenterName ? false : true}
                                target="_blank">{comment.username}</a>
                                <span hidden={showCommenterName ? false : true}> &nbsp;:&nbsp; </span>
                            <p>{comment.comment}</p>
                        </div>
                        <div class="row mt-5">
                            <div class="col-10 px-0">
                                Commented at {WebUtils.timeTransfer(comment.createTime)}
                            </div>
                            <div class="col-2 px-0" hidden={adminMode ? false : true}>
                                {/* <button type="button" 
                                        class="btn btn-white align-right"
                                        onClick={(event) => deleteComment(loggedInUser, comment)}>
                                        Delete
                                </button> */}
                                <i class="fa fa-trash fa-lg"
                                    style={{cursor: "pointer"}}
                                   onClick={(event) => deleteComment(loggedInUser, comment)}>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentCard;


{/* <div class="card-body">
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
</div> */}