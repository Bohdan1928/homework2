import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, showPosts} = this.props
        return (
            <div>
                {item.id} - {item.name} <button onClick={()=>showPosts(item.id)}>show posts</button>
            </div>
        );
    }
}

export default User;