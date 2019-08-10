import { WebUtils } from '../../utils/WebUtils';
import users from '../../data/user/Users.json';
import User from '../../models/UserLogin/User';

const URL = /*"https://wbdv-sf19-project-java-server.herokuapp.com/"*/ 'http://localhost:8080'

export default class UserServiceClient {
    static myInstance = null;

    constructor() {
        this.login = this.login.bind(this);
    }

    static getInstance() {
        if (this.myInstance == null) {
            this.myInstance 
                = new UserServiceClient();
        }
        return this.myInstance;
    }

    login(username, password) {
        var user = {
            "username": username,
            "password": password
        };
        console.log(user);
        return fetch(URL + '/api/auth', {
			method: "POST",
            body: JSON.stringify(user),
            credentials: "include",
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => {
			return response.json();
		})
    }

    logout() {
        return fetch(URL + '/api/logout', {
            method: "GET",
            credentials: "include"
        }).then(response => {
            return response.json();
        })
    }
    register(info) {
        console.log(info);
        var user = {
            username: info.username,
            password: info.password,
            firstName: info.firstName,
            lastName: info.lastName,
            role: info.role,
            profilePhoto: info.profileImgBase64
        }
        return fetch(URL + '/api/users', {
            method: "POST",
			body: JSON.stringify(user),
			headers: {
				'content-type': 'application/json'
			}
        }).then(response => {
            return response.json();
        })        
    }
    getUserFromSession() {
        return fetch(URL + '/api/session/user', {
            method: "GET",
            credentials: "include"
        }).then(response => {
            console.log(response);
            return response.json();
        })
    }
    getUserById(userId) {
        return fetch(URL + '/api/users/' + userId, {
            method: "GET",
            credentials: "include"
        }).then(response => {
            console.log(response);
            return response.json();
        })
    }
    updateUser(user) {
        return {
            id: "1111",
            role: "",
            username: "east",
            intro: "ssssss",
            profileImageBase64: "",
            comments: [],
            likes: [],
            follows: [],
            followers: [],
            playlist: []
        };        
    }
}