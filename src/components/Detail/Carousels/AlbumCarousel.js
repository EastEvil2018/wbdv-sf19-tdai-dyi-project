import React from 'react';
import {Carousel, Dropdown} from 'react-bootstrap';

const AlbumCarousel = ({albums}) => {
    return (
        <div class="w-100">
        <Carousel indicators={false}>
            {albums.map(album => {
                return (
                    <Carousel.Item>
                        <div class="row my-3">
                            <a href={"/details/album/" + album.id}
                               class="text-center w-100"
                               target="_blank">
                                <img className="d-block rounded-circle mx-auto"
                                    src={`${album.images[0].url}`}
                                    alt="First slide"
                                    style={{width: "6rem", height: "6rem"}}/>
                            </a>
                        </div>
                        <div class="row my-3">
                            <a class="text-center w-100" 
                               href={"/details/album/" + album.id}
                               target="_blank">
                                {album.name}
                            </a>
                        </div>
                    </Carousel.Item>                    
                );
            })}
        </Carousel>
        </div>
    );
}

export default AlbumCarousel;