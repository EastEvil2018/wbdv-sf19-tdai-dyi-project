import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default class Track extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal 
                show={this.props.open && this.props.selectedMusic !== null} 
                onHide={this.props.closeModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedMusic? this.props.selectedMusic.name: 'Music Name'}</Modal.Title>
                </Modal.Header>
                <Modal.Body 
                    style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <img
                                src={this.props.selectedMusic? this.props.selectedMusic.album.images[1].url: null}/>
                            <li className="list-group-item">
                                Album Name: {this.props.selectedMusic? this.props.selectedMusic.album.name: 'Album Name'}
                            </li>
                            <li className="list-group-item">
                                Release Date: {this.props.selectedMusic? this.props.selectedMusic.album.release_date: 'Release Date'}
                            </li>
                            <li className="list-group-item">
                                Duration(ms): {this.props.selectedMusic? this.props.selectedMusic.duration_ms: 'Duration'}
                            </li>
                            <li className="list-group-item">
                                Artists: {this.props.selectedMusic? this.props.getArtistsListString(this.props.selectedMusic.artists): 'Artists'}
                            </li>
                            <li className="list-group-item">
                                Link: <a href={this.props.selectedMusic? this.props.selectedMusic.external_urls.spotify: 'https://open.spotify.com/'}>Spotify Link</a>
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
    