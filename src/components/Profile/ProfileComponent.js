import React from 'react';
import PlayListList from '../PlayList/PlayListList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FollowList from './FollowList';
import FollowerList from './FollowerList';
import CommentList from '../Comment/CommentList';
import LikeList from './LikeList';
import SettingForm from './SettingForm';

export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        const paths = props.location.pathname.split('/').splice(1);
        const userId = paths[1];
        console.log("Enter profile:", userId);
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
                                    class="btn btn-primary"
                                    onClick={() => 
                                        this.props.unfollow(this.props.loggedInUser.id, this.props.user.id)}>
                                UnFollow
                            </button>
                        );
                    } else {
                        return (
                            <button type="button" 
                                    class="btn btn-primary"
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

        return (
            <div class="w-100">
                <div class="row">
                    <div class="card mb-3 w-100">
                        <div class="card-header">
                            Profile
                        </div>
                        <div class="row no-gutters">
                            <div class="col-sm-4 col-md-4 col-lg-2 card border-0 p-3">
                                <img className="card-img-top rounded-circle"
                                    src={`${this.props.user.profilePhoto}`/*require('../../images/avatar5.png')*/}/> 
                            </div>
                            <div class="col-sm-8 col-md-8 col-lg-10 card border-0">
                                <div class="card-body">
                                    <h5 class="card-title">{this.props.user.username}EastEvil</h5> 
                                    <p class="card-text">{this.props.user.intro}A Fun Guy</p>
                                    {this.renderFollowButton()}
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-2">
                                                <Link class="card-link" to={"/profile/" + this.props.user.id + "/follows"}>Follows</Link>
                                            </div>
                                            <div class="col-2">
                                                <Link class="card-link" to={"/profile/" + this.props.user.id + "/followers"}>Followers</Link>
                                            </div>
                                            <div class="col-2">
                                                <Link class="card-link" to={"/profile/" + this.props.user.id + "/likes"}>Likes</Link>
                                            </div>
                                            <div class="col-2">
                                                <Link class="card-link" to={"/profile/" + this.props.user.id + "/comments"}>Comments</Link>
                                            </div>
                                            <div class="col-2">
                                                <Link class="card-link" to={"/profile/" + this.props.user.id + "/playlist"}>PlayList</Link>
                                            </div>
                                            <div class="col-2" hidden={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id ? false : true}>
                                                <Link class="card-link" to={"/profile/" + this.props.user.id + "/settings"}>Settings</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/profile/:uid/follows"
                        exact={true}
                        render={() => <FollowList follows={this.props.user.followings}/>}/>   
                <Route path="/profile/:uid/followers"
                       exact={true}
                       render={() => <FollowerList followers={this.props.user.followers}/>}/>
                <Route path="/profile/:uid/comments"
                       exact={true}
                       render={() => 
                        <CommentList loggedInUser={this.props.loggedInUser}
                                     comments={this.props.user.comments}
                                     showProductName={true}
                                     showCommenterName={false}
                                     adminMode={this.props.loggedIn && (this.props.loggedInUser.role === "ADMIN" || this.props.loggedInUser.id === this.props.user.id)}
                                     deleteComment={this.props.deleteComment}/>}/>
                <Route path="/profile/:uid/likes"
                       exact={true}
                       render={() => <LikeList likes={this.props.user.favorites} showProfile={false}/>}/>
                <Route path="/profile/:uid/playlist"
                       exact={true}
                       render={() => 
                        <PlayListList playlists={this.props.user.playlists}
                                      userId={this.props.user.id}
                                      hasCreateAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                      newPlayList={this.props.newPlayList}
                                      createPlayList={this.props.createPlayList} 
                                      hasDeleteAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                      newPlayListNameChanged={this.props.newPlayListNameChanged}/>}/>
                <Route path="/profile/:uid/settings"
                       exact={true}
                       render={() => 
                       <SettingForm settingForm={this.props.settingForm} 
                                    settingFormChanged={this.props.settingFormChanged} 
                                    uploadImage={this.props.uploadImage} 
                                    updateUser={this.props.updateUser}
                                    show={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}/>}/>
                <Route path="/profile/:uid"
                        exact={true}
                        render={() => 
                            <PlayListList playlists={this.props.user.playlists}
                                          userId={this.props.user.id}
                                          hasCreateAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                          newPlayList={this.props.newPlayList}
                                          createPlayList={this.props.createPlayList} 
                                          newPlayListNameChanged={this.props.newPlayListNameChanged}/>}/>
                <Route path="/profile"
                        exact={true}
                        render={() => 
                            <PlayListList playlists={this.props.user.playlists}
                                          userId={this.props.user.id}
                                          hasCreateAccess={this.props.loggedIn && this.props.loggedInUser.id === this.props.user.id}
                                          newPlayList={this.props.newPlayList}
                                          createPlayList={this.props.createPlayList} 
                                          newPlayListNameChanged={this.props.newPlayListNameChanged}/>}/>
            </div>
        );
    }
}