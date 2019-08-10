
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

    follow(followerId, followederId) {

    }

    unfollow(followerId, followederId) {
        
    }
}