import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Whiteboard from './components/whiteBoard';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
    <Whiteboard/>,
    document.getElementById('root')
);

