
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
        
    }
}