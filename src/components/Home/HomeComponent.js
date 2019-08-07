import React from 'react';
import Header from './Header/Header';
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
                <div className="row">
                    <PrivateContentList></PrivateContentList>
                </div>
            </div>
        );
    }
}