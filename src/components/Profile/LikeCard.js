import React from 'react';

export const LikeCard = ({like, showProfile}) => {
    console.log("Render LikeCard : ", like);
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
                <a href={showProfile ? "/profile/" + like.userId : "/details/" + like.productType + "/" + like.productId}
                   target="_blank">
                    <img className="d-block card-img-top rounded-circle mx-auto"
                    src={showProfile ? 
                            require('../../images/default-user-profile.png') : 
                            like.productImageUrl ? `${like.productImageUrl}` : require('../../images/default-singer-profile.png')}
                    style={{width: "5rem", height: "5rem"}}/>
                </a>
                <div className="card-body">
                    <p className="card-text text-center">
                        {showProfile ? like.username : like.productName}
                    </p>
                </div>                   
            </div>
        </div>
    );
}

export default LikeCard;
