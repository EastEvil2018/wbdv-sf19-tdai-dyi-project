import URL from '../../constants/constant';

export default class FollowServiceClient {
    static instance = null;
    constructor() {
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new FollowServiceClient();
        }
        return this.instance;
    }

    follow(followerId, followeeId) {
        return fetch(URL + "/api/users/" + followerId + "/follow/users/" + followeeId, {
            method: "POST",
            credentials: "include"
        }).then(response => {
            return response.json();
        })
    }

    unfollow(followerId, followeeId) {
        return fetch(URL + "/api/users/" + followerId + "/unfollow/users/" + followeeId, {
            method: "DELETE",
            credentials: "include"
        }).then(response => {
            return response.json();
        })       
    }
}