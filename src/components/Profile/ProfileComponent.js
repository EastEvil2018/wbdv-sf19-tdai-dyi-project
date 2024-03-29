import React from 'react';
import PlayListList from '../PlayList/PlayListList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FollowList from './FollowList';
import FollowerList from './FollowerList';
import CommentList from '../Comment/CommentList';
import LikeList from './LikeList';
import SettingForm from './SettingForm';
import { Redirect } from 'react-router-dom'
import NotificationList from '../Home/Notification/NotificationList';


export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        const paths = props.location.pathname.split('/').splice(1);
        const userId = paths[1];
        console.log("Enter profile:", userId);
        if (userId === undefined)
            this.props.getUserFromSession();
        else
            this.props.getUserById(userId);
    }
    hasFollowed() {
        const loggedInUser = this.props.loggedInUser;
        const user = this.props.user;
        return loggedInUser.followings.find(following => following.id === user.id) !== undefined;
    }
    renderFollowButton() {
        switch(this.props.loggedIn) {
            case true:
                if (this.props.user.id === this.props.loggedInUser.id) {
                    return;
                } else {
                    if (this.hasFollowed()) {
                        return (
                            <button type="button" 
                                    className="btn btn-primary"
                                    onClick={() => 
                                        this.props.unfollow(this.props.loggedInUser.id, this.props.user.id)}>
                                UnFollow
                            </button>
                        );
                    } else {
                        return (
                            <button type="button" 
                                    className="btn btn-primary"
                                    onClick={() => 
                                        this.props.follow(this.props.loggedInUser.id, this.props.user.id)}>
                                Follow
                            </button>
                        );
                    }
                }
            case false:
                return;
            default:
                return;
        }
    }

    render(){   
        console.log("ProfileComponent: ", this.props);    

        if (this.props.user.id === "") {
            return ("");
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="card mb-3 w-100 border-0">
                        <div className="card-header border-danger text-dark"
                            style={{borderWidth: "0.1rem", fontSize: "1.1rem", background:"#f5f5f5"}}>
                            <i className="fa fa-circle mr-2 text-danger"></i> 
                            Profile
                        </div>
                        <div className="row no-gutters">
                            <div className="col-sm-4 col-md-4 col-lg-2 card border-0 p-3">
                                <img className="card-img-top rounded-circle"
                                    src={`${this.props.user.profilePhoto}`/*require('../../images/avatar5.png')*/}/> 
                            </div>
                            <div className="col-sm-8 col-md-8 col-lg-10 card border-0">
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.user.username}</h5> 
                                    <p className="card-text">{this.props.user.intro}</p>
                                    {this.renderFollowButton()}
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-2">
                                                <Link className="card-link" to={"/profile/" + this.props.user.id + "/follows"}>Follows</Link>
                                            </div>
                                            <div className="col-2">
                                                <Link className="card-link" to={"/profile/" + this.props.user.id + "/followers"}>Followers</Link>
                                            </div>
                                            <div className="col-2">
                                                <Link className="card-link" to={"/profile/" + this.props.user.id + "/likes"}>Likes</Link>
                                            </div>
                                            <div className="col-2">
                                                <Link className="card-link" to={"/profile/" + this.props.user.id + "/comments"}>Comments</Link>
                                            </div>
                                            <div className="col-2">
                                                <Link className="card-link" to={"/profile/" + this.props.user.id + "/playlist"}>PlayList</Link>
                                            </div>
                                            <div className="col-2" hidden={this.props.loggedIn && this.props.loggedInUser.role === "ADMIN" ? false : true}>
                                                <Link className="card-link" to={"/profile/" + this.props.user.id + "/notifications"}>Notifications</Link>
                                            </div>
                                            <div className="col-2" hidden={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id ? false : true}>
                                                <Link className="card-link" to={"/profile/" + this.props.user.id + "/settings"}>Settings</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/profile/:uid/notifications"
                       exact={true}
                       render={() => 
                            <NotificationList loggedInUser={this.props.loggedInUser}
                                              postNotification={this.props.postNotification}
                                              updateNotification={this.props.updateNotification}
                                              deleteNotification={this.props.deleteNotification}
                                              notifications={this.props.loggedInUser.notifications}/>}/>
                <Route path="/profile/:uid/follows"
                        exact={true}
                        render={() => <FollowList follows={this.props.user.followings}/>}/>   
                <Route path="/profile/:uid/followers"
                       exact={true}
                       render={() => <FollowerList followers={this.props.user.followers}/>}/>
                <Route path="/profile/:uid/comments"
                       exact={true}
                       render={() => 
                        <CommentList title={"Comments"}
                                     loggedInUser={this.props.loggedInUser}
                                     comments={this.props.user.comments}
                                     showProductName={true}
                                     showCommenterName={false}
                                     adminMode={this.props.loggedIn && (this.props.loggedInUser.role === "ADMIN" || this.props.loggedInUser.id === this.props.user.id)}
                                     commentContentChanged={this.props.commentContentChanged}
                                     updateComment={this.props.updateComment}
                                     haveUpdateAccess={this.props.loggedIn && (this.props.loggedInUser.role === "ADMIN" || this.props.loggedInUser.id === this.props.user.id)}
                                     deleteComment={this.props.deleteComment}/>}/>
                <Route path="/profile/:uid/likes"
                       exact={true}
                       render={() => <LikeList likes={this.props.user.favorites} showProfile={false}/>}/>
                <Route path="/profile/:uid/playlist"
                       exact={true}
                       render={() => 
                        <PlayListList title={"PlayLists"}
                                      playlists={this.props.user.playlists}
                                      userId={this.props.user.id}
                                      hasCreateAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                      newPlayList={this.props.newPlayList}
                                      createPlayList={this.props.createPlayList} 
                                      hasDeleteAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                      newPlayListNameChanged={this.props.newPlayListNameChanged}
                                      deletePlayListById={this.props.deletePlayListById}/>}/>
                <Route path="/profile/:uid/settings"
                       exact={true}
                       render={() => 
                       <SettingForm loggedInUser={this.props.loggedInUser}
                                    history={this.props.history}
                                    settingForm={this.props.settingForm} 
                                    settingFormChanged={this.props.settingFormChanged} 
                                    uploadImage={this.props.uploadImage} 
                                    updateUser={this.props.updateUser}
                                    show={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                    deleteAccount={this.props.deleteAccount}
                                    message={this.props.message}/>}/>
                <Route path="/profile/:uid"
                        exact={true}
                        render={() => 
                            <PlayListList title={"PlayLists"}
                                          playlists={this.props.user.playlists}
                                          userId={this.props.user.id}
                                          hasCreateAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                          newPlayList={this.props.newPlayList}
                                          createPlayList={this.props.createPlayList} 
                                          hasDeleteAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                          newPlayListNameChanged={this.props.newPlayListNameChanged}
                                          deletePlayListById={this.props.deletePlayListById}/>}/>
                <Route path="/profile"
                        exact={true}
                        render={() => 
                            <PlayListList title={"PlayLists"}
                                          playlists={this.props.user.playlists}
                                          userId={this.props.user.id}
                                          hasCreateAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                          newPlayList={this.props.newPlayList}
                                          createPlayList={this.props.createPlayList} 
                                          hasDeleteAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                          newPlayListNameChanged={this.props.newPlayListNameChanged}
                                          deletePlayListById={this.props.deletePlayListById}/>}/>
            </div>
        );
    }
}