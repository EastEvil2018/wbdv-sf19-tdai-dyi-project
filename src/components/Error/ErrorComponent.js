import React from 'react';

export default class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div class="container">
                <img className="d-block m-auto" 
                     src={require('../../images/404-error.png')} />
            </div>
        );
    }
}