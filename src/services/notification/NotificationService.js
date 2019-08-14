import URL from '../../constants/constant';

export default class NotificationServiceClient {
    static instance = null;
    constructor() {
    }

    static getInstance() {
        if (this.instance == null) {
            this.instance = new NotificationServiceClient();
        }
        return this.instance;
    }
    
    postNotification(userId, content) {
        var body = {
            content: content
        }
        return fetch(URL + '/api/users/' + userId + "/notifications", {
			method: "POST",
            body: JSON.stringify(body),
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => {
			return response.json();
        })
    }

    updateNotification(notification, content) {
        notification.content = content;
        var body = notification;
        return fetch(URL + '/api/notifications/' + notification.id, {
			method: "PUT",
            body: JSON.stringify(body),
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => {
			return response.json();
        })
    }

    deleteNotification(notification) {
        return fetch(URL + '/api/notifications/' + notification.id, {
			method: "DELETE"
		}).then(response => {
			return response.json();
        })        
    }

    findRecentNotifications() {
        return fetch(URL + '/api/notifications/recent/5', {
			method: "GET"
		}).then(response => {
			return response.json();
        })           
    }

    findAllNotificationsForUser(userId) {
        return fetch(URL + '/api/users/' + userId + "/notifications", {
			method: "GET"
		}).then(response => {
			return response.json();
        })
    }
}