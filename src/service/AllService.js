export class AllService {
    url = "http://jsonplaceholder.typicode.com"

    getAllUsers(){
        return fetch(`${this.url}/users`).then(value => value.json()).then(value => value)
    }
    getAllBody(){
        return fetch(`${this.url}/posts`).then(value => value.json()).then(value => value)
    }
}