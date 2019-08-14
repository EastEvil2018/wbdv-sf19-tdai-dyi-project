import React from 'react';
import {Collapse,  Button} from "react-bootstrap"
import {WebUtils} from '../../../utils/WebUtils'


const NotificationCard = ({adminMode, notification, deleteNotification, updateNotification}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div class="card border-top-0 border-left-0 border-right-0">
            <div class="card-body py-0">
                <div className="row">
                    <div className="col px-0">
                        {notification.content}
                    </div>
                </div>
                <div className="row mt-4 mb-1">
                    <div className="col-10 px-0">
                        By Admin {notification.username} posted at {WebUtils.timeTransfer(notification.createTime)}
                    </div>

                    <div className="col px-0" hidden={adminMode ? false : true}>
                        <i className="fa fa-trash fa-lg text-danger"
                            style={{cursor: "pointer"}}
                            onClick={(event) => deleteNotification(notification)}>
                        </i>
                    </div>  
                    <div className="col px-0" hidden={adminMode ? false : true}>                      
                        <i  className="fa fa-edit fa-lg text-primary"
                            style={{cursor: "pointer"}}
                            onClick={() => setOpen(!open)}
                            aria-controls="notification-edit"
                            aria-expanded={open}>
                        </i>
                    </div>
                </div>
                <Collapse in={open}>
                    <div id="notification-edit"
                            className="row mt-2">
                        <textarea className="form-control"
                                    rows="3"
                                    id={notification.id + "_notification_edit_area"}
                                    defaultValue={notification.content}>
                        </textarea>
                        <Button variant="primary"
                                onClick={() => {
                                    const content = document.getElementById(notification.id + "_notification_edit_area").value;
                                    console.log("GET THE COMMENT AREA:", content);
                                    updateNotification(notification, content)
                                }}
                                className="ml-auto my-1">
                            Update
                        </Button>
                    </div>
                </Collapse>
            </div>
        </div>    
    );
}

export default NotificationCard;