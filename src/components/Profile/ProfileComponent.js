import React from 'react';
import PlayListList from './PlayListList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FollowList from './FollowList';
import FollowerList from './FollowerList';
import CommentList from './CommentList';
import LikeList from './LikeList';
import SettingForm from './SettingForm';
import PlayListCard from './PlayListCard';

export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render(){    

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
                                    src={require('../../images/avatar5.png')}/> 
                            </div>
                            <div class="col-sm-8 col-md-8 col-lg-10 card border-0">
                                <div class="card-body">
                                    <h5 class="card-title">EastEvil</h5> 
                                    <a href="#" class="btn btn-primary float-right">Follow</a>                                    
                                    <a href="#" class="btn btn-primary float-right mr-2">UnFollow</a>
                                    <p class="card-text">A Fun Guy</p>
                                    <Link class="card-link" to={"/profile/" + 333 + "/follows"}>Follows</Link>
                                    <Link class="card-link" to={"/profile/" + 333 + "/followers"}>Followers</Link>
                                    <Link class="card-link" to={"/profile/" + 333 + "/likes"}>Likes</Link>
                                    <Link class="card-link" to={"/profile/" + 333 + "/comments"}>Comments</Link>
                                    <Link class="card-link" to={"/profile/" + 333 + "/playlist"}>PlayList</Link>
                                    <Link class="card-link" to={"/profile/" + 333 + "/settings"}>Settings</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/profile/:uid/follows"
                        exact={true}
                        component={FollowList}/>   
                <Route path="/profile/:uid/followers"
                       exact={true}
                       component={FollowerList}/>
                <Route path="/profile/:uid/comments"
                       exact={true}
                       component={CommentList}/>
                <Route path="/profile/:uid/likes"
                       exact={true}
                       component={LikeList}/>
                <Route path="/profile/:uid/playlist"
                       exact={true}
                       component={PlayListList}/>
                <Route path="/profile/:uid/playlist/:pid"
                       exact={true}
                       component={PlayListCard}/>
                <Route path="/profile/:uid/settings"
                       exact={true}
                       component={SettingForm}/>
                <Route path="/profile/:uid"
                        exact={true}
                        component={PlayListList}/>  
                <Route path="/profile"
                        exact={true}
                        component={PlayListList}/>  
            </div>
        );
    }
}