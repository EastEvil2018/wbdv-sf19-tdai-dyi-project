import React from 'react';
import {WebUtils} from '../../utils/WebUtils';
import {Collapse,  Button} from "react-bootstrap"

{/* <div className="col">
<a href={"/details/" + comment.productType + "/" + comment.productId}
    className="text-center w-100"
    target="_blank">
    <img className="d-block rounded-circle mx-auto"
        src={require('../../images/default-track-profile.png')}
        alt="First slide"
        style={{width: "6rem", height: "6rem"}}/>
</a>                            
</div> */}
const CommentCard = ({loggedInUser, 
                      comment, 
                      showProductName, 
                      showCommenterName, 
                      adminMode, 
                      deleteComment,
                      updateComment}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="card w-100 border-top-0 border-left-0 border-right-0">
            <div className="card-body p-0">
                <div className="row h-100 mx-0">
                    <div className="col-3 my-auto text-center"
                         hidden={showProductName ? false : true}>
                        <a href={"/details/" + comment.productType + "/" + comment.productId}
                            className=""
                            target="_blank"
                            hidden={showProductName ? false : true}>
                            <img className="rounded-circle"
                                src={comment.productImageUrl ? `${comment.productImageUrl}` : require('../../images/default-track-profile.png')}
                                style={{width: "4rem", height: "4rem"}}/>
                        </a> 
                        <p className="my-0">
                            <a href={"/details/" + comment.productType + "/" + comment.productId}
                                className=""
                                target="_blank">
                                {comment.productType&&comment.productType.toUpperCase()}&nbsp;:&nbsp;{comment.productName}
                            </a>
                        </p>
                    </div>
                    <div className="col my-auto ml-4">
                        <div className="row">
                            <a href={"/profile/" + comment.userId}
                                className=""
                                hidden={showCommenterName ? false : true}
                                target="_blank">{comment.username}</a>
                                <span hidden={showCommenterName ? false : true}> &nbsp;:&nbsp; </span>
                            <p>{comment.comment}</p>
                        </div>
                        <div className="row mt-3">
                            <div className="col-10 px-0">
                                Commented at {WebUtils.timeTransfer(comment.createTime)}
                            </div>
                            <div className="col px-0" hidden={adminMode ? false : true}>
                                {/* <button type="button" 
                                        className="btn btn-white align-right"
                                        onClick={(event) => deleteComment(loggedInUser, comment)}>
                                        Delete
                                </button> */}
                                <i className="fa fa-trash fa-lg text-danger"
                                    style={{cursor: "pointer"}}
                                   onClick={(event) => deleteComment(loggedInUser, comment)}>
                                </i>
                            </div>  
                            <div className="col px-0" 
                                 hidden={adminMode || loggedInUser.id === comment.userId ? false : true}>                      
                                <i  className="fa fa-edit fa-lg text-primary"
                                    style={{cursor: "pointer"}}
                                    onClick={() => setOpen(!open)}
                                    aria-controls="comment-edit"
                                    aria-expanded={open}>
                                </i>
                            </div>
                        </div>

                        <Collapse in={open}>
                            <div id="comment-edit"
                                 className="row mt-2">
                                <textarea className="form-control"
                                          rows="3"
                                          id={comment.id + "_comment_area"}
                                          defaultValue={comment.comment}>
                                </textarea>
                                <Button variant="primary"
                                        onClick={() => {
                                            const content = document.getElementById(comment.id + "_comment_area").value;
                                            console.log("GET THE COMMENT AREA:", content);
                                            updateComment(loggedInUser, comment, content)
                                        }}
                                        className="ml-auto my-1">
                                    Update
                                </Button>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentCard;


{/* <div className="card-body">
<h5 className="card-title"
    hidden={showProductName ? false : true}>
    <a href={"/details/" + comment.productType + "/" + comment.productId}
        target="_blank">
        {comment.productName}
    </a>
</h5> 
<p className="card-text">
    {comment.comment}
</p>
<h6 className="card-subtitle mb-2 text-muted">
    <a href={"/profile/" + comment.userId}
    className="mx-1"
    hidden={showCommenterName ? false : true}
    target="_blank">{comment.username}</a> 
    Commented at {WebUtils.timeTransfer(comment.createTime)}
</h6>
</div>
<div className="card-footer 
        text-right"
 hidden={adminMode ? false : true}>
<button type="button" 
        className="btn btn-primary align-right"
        onClick={(event) => deleteComment(loggedInUser, comment)}>
        Delete
</button>
</div>
</div> */}