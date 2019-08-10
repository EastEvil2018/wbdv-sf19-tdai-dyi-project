
export default class LikeServiceClient {
    static instance = null;
    constructor() {
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new LikeServiceClient();
        }
        return this.instance;
    }

    like(user, product) {

    }

    unfollow(user, product) {
        
    }

    findAllLikesByProductId(productId, productType) {
        
    }
}