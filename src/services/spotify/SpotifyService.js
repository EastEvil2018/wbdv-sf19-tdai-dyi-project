import { WebUtils } from "../../utils/WebUtils";
import URL from '../../constants/constant';

export class SpotifyServiceClient {
    static instance = null;
    constructor() {
        this.getAccessToken = this.getAccessToken.bind(this);
        this.search = this.search.bind(this);
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new SpotifyServiceClient();
        }
        return this.instance;
    }


    getAccessToken() {
        const client_id = "d64551f826e14f608c5e9a106c912991";
        const client_secret = "5cd0f786c52542a6a2c29cc8e8c5ccf8";
        const endpoint = URL + "/api/token/" + client_id;
        return fetch(endpoint, {
            method: "POST",
			body: client_secret
        }).then(
            response => {
                return response.json();
            }
        );
    }

    search(keyword, accessToken, type) {
        if (WebUtils.isStringEmpty(keyword) 
            || WebUtils.isStringEmpty(type))
            return;

        console.log(accessToken);
        const endpoint 
            = "https://api.spotify.com/v1/search?query=" + 
                keyword + 
                "&type=" + 
                type;

        return fetch(endpoint, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        }).then(
            response => {
                return response.json();
            }
        );
    }

    searchDetails(id, accessToken, spotifyKey) {
        const endpoint 
            = "https://api.spotify.com/v1/" + spotifyKey + '/' + id;

        return fetch(endpoint, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        }).then(
            response => {
                return response.json();
            }
        );
    }

    getAlbumsForArtist(id, accessToken) {
        const endpoint 
            = "https://api.spotify.com/v1/artists/" + id + '/albums';
        return fetch(endpoint, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        }).then(
            response => {
                return response.json();
            }
        );
    }
}