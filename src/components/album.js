import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default class Album extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal 
                show={this.props.open && this.props.selectedAlbum !== null} 
                onHide={this.props.closeModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedAlbum? this.props.selectedAlbum.name: 'Album Name'}</Modal.Title>
                </Modal.Header>
                <Modal.Body 
                    style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <img
                                src={this.props.selectedAlbum? this.props.selectedAlbum.images[1].url: null}/>
                            <li className="list-group-item">
                                Album Name: {this.props.selectedAlbum? this.props.selectedAlbum.name: 'Album Name'}
                            </li>
                            <li className="list-group-item">
                                Release Date: {this.props.selectedAlbum? this.props.selectedAlbum.release_date: 'Release Date'}
                            </li>
                            <li className="list-group-item">
                                Total Tracks: {this.props.selectedAlbum? this.props.selectedAlbum.total_tracks: 'Total Tracks'}
                            </li>
                            <li className="list-group-item">
                                Artists: {this.props.selectedAlbum? this.props.getArtistsListString(this.props.selectedAlbum.artists): 'Artists'}
                            </li>
                            <li className="list-group-item">
                                Link: <a href={this.props.selectedAlbum? this.props.selectedAlbum.external_urls.spotify: 'https://open.spotify.com/'}>Spotify Link</a>
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
    