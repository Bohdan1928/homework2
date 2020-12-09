export class PostsService{
    url = "http://jsonplaceholder.typicode.com/posts";

    getAllBody(body){
        return fetch(`${this.url}`).then(value => value.json()).then(value => value)
    }
}