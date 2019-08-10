import React from 'react';

export const LikeCard = ({like}) => {
    return (
        <div class="col-sm-6
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
                <a href={"/details/" + like.product.type + "/" + like.product.id}
                   target="_blank">
                    <img className="d-block card-img-top rounded-circle mx-auto"
                    src={require('../../images/snoop-dogg.jpg')}
                    style={{width: "5rem", height: "5rem"}}/>
                </a>
                <div className="card-body">
                    <p className="card-text text-center">
                        {like.product.name}
                    </p>
                </div>                   
            </div>
        </div>
    );
}

export default LikeCard;
