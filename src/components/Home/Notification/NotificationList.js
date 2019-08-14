import React from 'react';
import NotificationCard from './NotificationCard';
import {Collapse,  Button} from "react-bootstrap"

const NotificationList = ({ loggedInUser, notifications, postNotification, deleteNotification, updateNotification }) => {
    return (
        <div className="card mt-2 border-0">
            <div className="card-header border-danger text-dark"
                 style={{borderWidth: "0.1rem", fontSize: "1.1rem", background:"#f5f5f5"}}>
                <i className="fa fa-circle mr-2 text-danger"></i> 
                Notifications
            </div>
            <ul className="w-100 p-0">
                {notifications && notifications.map(notification => {
                    return (
                        <ol className="px-1 py-2" key={notification.id}>
                            <NotificationCard notification={notification}
                                              deleteNotification={deleteNotification}
                                              updateNotification={updateNotification}
                                              adminMode={loggedInUser.role === "ADMIN" ? true : false}/>
                        </ol>
                    );
                })}
                <ol className="px-1 py-2" hidden={loggedInUser.role === "ADMIN" ? false : true}>
                    <textarea className="form-control"
                                rows="3"
                                id={"notification_post_area"}>
                    </textarea>
                    <Button variant="primary"
                            onClick={() => {
                                const content = document.getElementById("notification_post_area").value;
                                console.log("GET THE COMMENT AREA:", content);
                                postNotification(loggedInUser, content)
                            }}
                            className="ml-auto my-1">
                        Post
                    </Button>                
                </ol>
            </ul>
        </div>
    );
}

export default NotificationList;