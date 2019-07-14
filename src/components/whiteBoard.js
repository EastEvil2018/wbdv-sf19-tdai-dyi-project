import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import searchPage from './searchPage';
export default class Whiteboard extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <h1>Music Search Page</h1>
                    <Link to="/spotify">Spotify</Link>
                    <Route
                        path="/spotify"
                        component={searchPage}    
                    />
                </div>
            </Router>
        )
    }
}