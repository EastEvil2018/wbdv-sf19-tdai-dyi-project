const URL = /*"https://wbdv-sf19-project-java-server.herokuapp.com/"*/ 'http://localhost:8080'

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

    "/api/users/{uid}/favorites"
    findAllLikesForUser(userId) {
        return fetch(URL + "/api/users/" + userId + "/favorites", {
            method: "GET"
        }).then(response => {
            return response.json();
        })  
    }

    like(user, product) {
        const body = {
            productId: product.id,
            productType: product.type,
            productName: product.name
        }
        console.log("LIKE", body);
        return fetch(URL + "/api/users/" + user.id + "/favorites", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
				'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        })
    }

    unLike(user, product) {
        const body = {
            productId: product.id,
            productType: product.type,
            productName: product.name
        }
        console.log("LIKE", body);
        return fetch(URL + "/api/users/" + user.id + "/products/" + product.type + "/" + product.id + "/favorites", {
            method: "DELETE"
        }).then(response => {
            return response.json();
        })        
    }

    findAllLikesForProduct(productId, productType) {
        return fetch(URL + "/api/products/" + productType + "/" + productId + "/favorites", {
            method: "GET"
        }).then(response => {
            return response.json();
        })        
    }
}