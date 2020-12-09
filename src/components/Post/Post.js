import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {title, body, id} = this.props.post
        console.log(this.props.post);
        return (
            <div>
                {this.props.post.map(el => {
                    console.log(el);
                    return (
                        <h4>{el.id} {el.title}</h4>
                    )
                })}

            </div>
        );
    }
}

export default Post;