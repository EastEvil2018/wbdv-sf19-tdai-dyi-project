import React from 'react';
import CommentList from '../Comment/CommentList';
import PlayListList from '../PlayList/PlayListList';

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.props.getRecentComments();
    }

    renderPlayListList() {
        switch(this.props.loggedIn) {
            case true:
                return (                
                        <div className="container mt-2"
                            hidden={this.props.loggedIn ? false : true}>
                            <PlayListList playlists={this.props.loggedInUser.playlists}
                                        userId={this.props.loggedInUser.id}
                                        hasCreateAccess={this.props.loggedIn}
                                        hasDeleteAccess={this.props.loggedIn}
                                        newPlayList={this.props.newPlayList}
                                        createPlayList={this.props.createPlayList} 
                                        newPlayListNameChanged={this.props.newPlayListNameChanged}/>
                        </div>);
            case false:
                return;
            default:
                return;
        }
    }

    render(){
        return (
            <div class="container">
               <CommentList loggedInUser={this.props.loggedInUser}
                            comments={this.props.comments}
                            showProductName={true}
                            showCommenterName={true}
                            adminMode={this.props.loggedIn && this.props.loggedInUser.role === "ADMIN"}
                            deleteComment={this.props.deleteComment}/>
                {this.renderPlayListList()}
            </div>
        );
    }
}