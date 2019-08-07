import { WebUtils } from '../../utils/WebUtils';
import users from '../../data/user/Users.json';
import User from '../../models/UserLogin/User';

const URL = 'https://wbdv-sf19-project-java-server.herokuapp.com'

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
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => {
			return response.json();
		})
    }
}