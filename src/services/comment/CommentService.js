const URL = /*"https://wbdv-sf19-project-java-server.herokuapp.com/"*/ 'http://localhost:8080'

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
        return fetch(URL + "/api/comments/recent/" + 5, {
            method: "GET"
        }).then(response => {
            return response.json();
        })   
    }

    getCommentsForUser(userId) {
        return [];
    }

    deleteCommentById(id) {
        return fetch(URL + "/api/comments/" + id, {
            method: "DELETE"
        }).then(response => {
            return response.json();
        })        
    }

    postComment(user, product, comment) {
        const body = {
            productId: product.id,
            productType: product.type,
            productName: product.name,
            comment: comment
        }
        console.log("COMMENT", body);
        return fetch(URL + "/api/users/" + user.id + "/comments", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
				'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        })
    }

    findAllCommentsForProduct(productId, productType) {
        return fetch(URL + "/api/products/" + productType + "/" + productId + "/comments", {
            method: "GET"
        }).then(response => {
            return response.json();
        }) 
    }
}