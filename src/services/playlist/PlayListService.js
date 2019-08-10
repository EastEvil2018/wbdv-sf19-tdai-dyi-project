const URL = /*"https://wbdv-sf19-project-java-server.herokuapp.com/"*/ 'http://localhost:8080'

export default class PlayListServiceClient {
    static instance = null;
    constructor() {
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new PlayListServiceClient();
        }
        return this.instance;
    }

    getPlayListById(id) {
        var playlist = {
            "id": "233",
            "name": "Custom playlist",
            "list": [
                {
                    "id": "322",
                    "name": "Rap God"
                }
            ]
        };

        return playlist;
    }

    createPlayList(userId, playlist) {
        var body = {
            name: playlist.name
        }
        return fetch(URL + '/api/users/' + userId + "/playlists", {
			method: "POST",
            body: JSON.stringify(body),
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => {
			return response.json();
        })
    }

    addToPlayList(user, product, playListId) {
        return fetch(URL + "/api/playlists/" + playListId + "/add", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
				'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        })
    }
}