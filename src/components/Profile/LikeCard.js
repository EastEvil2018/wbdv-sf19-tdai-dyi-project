import React from 'react';

export default class LikeCard extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div class="col-sm-6
                        col-md-4 
                        col-lg-4 
                        p-sm-1
                        p-md-2
                        p-lg-5">
                <div class="card 
                            p-sm-1 
                            p-md-2
                            p-lg-5
                            border-0">
                    <img className="card-img-top rounded-circle"
                        src={require('../../images/snoop-dogg.jpg')}/>
                    <div className="card-body">
                        <p className="card-text text-center">Course Text</p>
                    </div>                   
                </div>
            </div>
        );
    }
}