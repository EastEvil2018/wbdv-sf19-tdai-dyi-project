import React from 'react';
import {Carousel, Dropdown} from 'react-bootstrap';
import '../../../css/components/Detail/Carousels/ArtistCarousel.css';
import LikeList from '../../Profile/LikeList';
import CommentList from '../../Profile/CommentList';

const TrackCard = ({product}) => {
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    Track
                    <span class="float-right">
                        <a href="#">Likes : 78</a>
                    </span>
                </div>
                <div class="card-body container">
                    <div class="row my-2">
                        <div class="col-sm-2 text-center">
                            Name
                        </div>
                        <div class="col-sm-10 text-center">
                            Rap God
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2 text-center my-auto">
                            Artist
                        </div>
                        <div class="col-sm-10 px-0 text-center">
                            <ArtistCarousel />
                        </div>                                       
                    </div>
                </div>
                <div class="card-footer">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Add to playList
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>List 1</Dropdown.Item>
                            <Dropdown.Item>List 2</Dropdown.Item>
                            <Dropdown.Item>List 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <LikeList />
            <CommentList />
            <div class="card mt-2">
                <div class="card-header">
                    Write Comment
                </div> 
                <div class="card-body">
                    <div class="row">
                        <textarea class="form-control"rows="3"></textarea>
                    </div>
                    <div class="row mt-2">
                        <button type="button" class="btn btn-info ml-auto">Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


const ArtistCarousel = ({}) => {
    return (
        <div class="w-100">
        <Carousel indicators={false}>
            <Carousel.Item>
                <div class="row my-3">
                    <img className="d-block rounded-circle mx-auto"
                        src={require('../../../images/snoop-dogg.jpg')}
                        alt="First slide"
                        style={{width: "6rem", height: "6rem"}}/>
                </div>
                <div class="row my-3">
                    <a class="text-center w-100" href="#">
                        Snoopy Doggy
                    </a>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="row my-3">
                    <img className="d-block rounded-circle mx-auto"
                        src={require('../../../images/snoop-dogg.jpg')}
                        alt="First slide"
                        style={{width: "6rem", height: "6rem"}}/>
                </div>
                <div class="row my-3">
                    <a class="text-center w-100" href="#">
                        Snoopy Doggy
                    </a>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default TrackCard;