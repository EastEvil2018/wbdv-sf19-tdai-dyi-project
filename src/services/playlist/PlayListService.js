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
        return fetch(URL + '/api/playlists/' + id, {
			method: "GET"
		}).then(response => {
			return response.json();
        })
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
        console.log(product)
        const body = {
            id: product.id,
            name: product.name
        }
        console.log("Add to playlist : ", body);
        return fetch(URL + "/api/playlists/" + playListId + "/add", {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
				'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        })
    }
}