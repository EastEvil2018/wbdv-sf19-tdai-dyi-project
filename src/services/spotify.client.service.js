export class SpotifyServiceClient {
    static instance = null;
    constructor() {
        this.getAccessToken = this.getAccessToken.bind(this);
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
        const endpoint = "https://accounts.spotify.com/api/token";
        return fetch(endpoint, {
            method: "POST",
            body: {
                "grant_type": "client_credentials "
            },
            headers : {
                "Authorization": "Basic " + client_id + ":" + client_secret
            }
        }).then(
            response => {
                console.log(response);
                return response.json();
            }
        );
    }
}