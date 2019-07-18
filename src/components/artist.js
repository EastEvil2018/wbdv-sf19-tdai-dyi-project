import React from "react";
import { Modal, Button } from 'react-bootstrap';

export default class Artist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal 
                show={this.props.open && this.props.selectedArtist !== null} 
                onHide={this.props.closeModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedArtist? this.props.selectedArtist.name: 'Artist Name'}</Modal.Title>
                </Modal.Header>
                <Modal.Body 
                    style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <img
                                src={this.props.selectedArtist? this.props.selectedArtist.images[1].url: null}/>
                            <li className="list-group-item">
                                Genres: {this.props.selectedArtist? this.props.selectedArtist.genres.join(','): 'Genres'}
                            </li>
                            <li className="list-group-item">
                                Total Followers: {this.props.selectedArtist? this.props.selectedArtist.followers.total: 'Total Followers'}
                            </li>
                            <li className="list-group-item">
                                Link: <a href={this.props.selectedArtist? this.props.selectedArtist.external_urls.spotify: 'https://open.spotify.com/'}>Spotify Link</a>
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
    