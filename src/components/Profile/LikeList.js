import React from 'react';
import LikeCard from './LikeCard';

export const LikeList = ({likes, showProfile}) => {
    console.log("RENDER LIKELIST : ", likes);
    return (
        <div class="card mt-2">
            <div class="card-header">
                Likes
            </div>
            <div class="card-body row">
                {/* <div class="col-sm-6
                        col-md-4 
                        col-lg-4 
                        p-sm-1
                        p-md-2
                        p-lg-5
                        p-0">
                    <div class="card 
                                p-sm-1 
                                p-md-2
                                p-lg-5
                                p-0
                                border-0">
                        <a href={"/details/track/7JezmrZAhbArL0o9Qwa369"}
                            target="_blank">
                            <img className="d-block card-img-top rounded-circle mx-auto"
                            src={require('../../images/snoop-dogg.jpg')}
                            style={{width: "5rem", height: "5rem"}}/>
                        </a>
                        <div className="card-body">
                            <p className="card-text text-center">Course Text</p>
                        </div>                   
                    </div>
                </div> */}
                {likes && likes.map(like => {
                    return <LikeCard like={like} showProfile={showProfile}/>
                })}
            </div>
        </div>
    );
}

export default LikeList;