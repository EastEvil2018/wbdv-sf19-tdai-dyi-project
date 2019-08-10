import { WebUtils } from '../../utils/WebUtils';
import users from '../../data/user/Users.json';
import User from '../../models/UserLogin/User';

const URL = 'https://wbdv-sf19-project-java-server.herokuapp.com/'

export default class UserService {
    static myInstance = null;

    constructor() {
        this.login = this.login.bind(this);
    }

    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance 
                = new UserService();
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
            credentials: 'include',
			headers: {
				'content-type': 'application/json'
			}
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
            credentials: 'include'
        }).then(response => {
            return response.json();
        })
    }
}