import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default class PlayList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal 
                show={this.props.open && this.props.selectedPlaylist !== null} 
                onHide={this.props.closeModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedPlaylist? this.props.selectedPlaylist.name: 'PlayList Name'}</Modal.Title>
                </Modal.Header>
                <Modal.Body 
                    style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {/* <img
                                src={this.props.selectedPlaylist? this.props.selectedPlaylist.images[0].url: null}/> */}
                            <li className="list-group-item">
                                Owner Name: {this.props.selectedPlaylist? this.props.selectedPlaylist.owner.display_name: 'Owner Name'}
                            </li>
                            <li className="list-group-item">
                                Total Tracks: {this.props.selectedPlaylist? this.props.selectedPlaylist.tracks.total: 'Total tracks'}
                            </li>
                            <li className="list-group-item">
                                Link: <a href={this.props.selectedPlaylist? this.props.selectedPlaylist.external_urls.spotify: 'https://open.spotify.com/'}>Spotify Link</a>
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}