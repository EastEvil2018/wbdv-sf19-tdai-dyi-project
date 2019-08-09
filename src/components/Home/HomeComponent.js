import React from 'react';
import PublicContentList from './Content/PublicContent/PublicContentList';
import PrivateContentList from './Content/PrivateContent/PrivateContentList';

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render(){
        return (
            <div>
                <div className="row">
                    <PublicContentList></PublicContentList>
                </div>
                <div className="row"
                     hidden={this.props.loggedIn ? false : true}>
                    <PrivateContentList></PrivateContentList>
                </div>
            </div>
        );
    }
}