import React from 'react';
import CommentList from '../Comment/CommentList';
import PlayListList from '../PlayList/PlayListList';
import {Carousel} from 'react-bootstrap';

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
                            <PlayListList title={"My PlayLists"}
                                        playlists={this.props.loggedInUser.playlists}
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
                <HomeCarousel />
               <CommentList title={"Most Recent Comments"}
                            loggedInUser={this.props.loggedInUser}
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

const HomeCarousel = ({}) => {
    return (
        <Carousel indicators={false} interval={2000}>
            <Carousel.Item>
                <div class="row text-center mt-3">
                    <HomeCarouselItem 
                        imageUrl={"https://i.scdn.co/image/32aa1fd4f61e0e8e089ff2f95632f2463231d5b1"}
                        id={"2QJmrSgbdM35R67eoGQo4j"}
                        albumName={"1989"}/>
                    <HomeCarouselItem 
                        imageUrl={"https://i.scdn.co/image/12d81cd3b4920c9aae5b3e1d244850fceb5a647f"}
                        id={"4Wv5UAieM1LDEYVq5WmqDd"}
                        albumName={"KOD"}/>
                    <HomeCarouselItem 
                        imageUrl={"https://i.scdn.co/image/aa8a47bd09486f303cafe538fdf6e8561f2347f0"}
                        id={"3jB9yFDwRe3KhtGnHXJntk"}
                        albumName={"PRISM"}/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
               <div class="row text-center mt-3">
                    <HomeCarouselItem 
                            imageUrl={"https://i.scdn.co/image/c932b53e6f13a45f32bc357303c56eb52ecc28fb"}
                            id={"3HNnxK7NgLXbDoxRZxNWiR"}
                            albumName={"Kamikaze"}/>
                    <HomeCarouselItem 
                            imageUrl={"https://i.scdn.co/image/e74585aca312d5b33cff46b4dbaf20fbe72775c3"}
                            id={"7MZzYkbHL9Tk3O6WeD4Z0Z"}
                            albumName={"Relapse: Refill"}/>                    
                    <HomeCarouselItem 
                            imageUrl={"https://i.scdn.co/image/e1e39d7fc409f95d2b3c04964875fb0d7f1fe8a0"}
                            id={"47BiFcV59TQi2s9SkBo2pb"}
                            albumName={"Recovery"}/>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

const HomeCarouselItem = ({imageUrl, id, albumName}) => {
    return (
        <div class="col">
            <a class="row" 
            href={"/details/album/" + id}
            target="_blank">
                <img className="mx-auto img-fluid"
                    src={imageUrl}
                    style={{width: "250px", height:"250px"}}/>
            </a>
            <p className="w-100 text-center mx-auto">
                <a href={"/details/album/" + id}
                target="_blank">{albumName}</a>
            </p>
        </div>
    );
}