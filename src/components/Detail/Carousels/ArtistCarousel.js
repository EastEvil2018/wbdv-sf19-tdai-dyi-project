import React from 'react';
import {Carousel, Dropdown} from 'react-bootstrap';

const ArtistCarousel = ({artists}) => {
    return (
        <div className="w-100">
        <Carousel indicators={false}>
            {artists.map(artist => {
                return (
                    <Carousel.Item>
                        <div className="row my-3">
                            <img className="d-block rounded-circle mx-auto"
                                src={require('../../../images/default-singer-profile.png')}
                                alt="First slide"
                                style={{width: "6rem", height: "6rem"}}/>
                        </div>
                        <div className="row my-3">
                            <a className="text-center w-100" 
                               href={"/details/artist/" + artist.id}
                               target="_blank">
                                {artist.name}
                            </a>
                        </div>
                    </Carousel.Item>                    
                );
            })}
        </Carousel>
        </div>
    );
}

export default ArtistCarousel;

