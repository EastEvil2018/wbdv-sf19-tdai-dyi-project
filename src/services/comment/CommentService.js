
export default class CommentServiceClient {
    static instance = null;
    constructor() {
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new CommentServiceClient();
        }
        return this.instance;
    }

    getRecentComments() {
        return [];
    }

    getCommentsForUser(userId) {
        return [];
    }

    postComment(user, product, comment) {

    }

    findAllCommentsByProductId(productId, productType) {
        return [];
    }
}