import React, {Component} from 'react';
import Post from "./Post";

class AllPosts extends Component {

    render() {
        let {postsUser} = this.props;
        return (
            <div>
                {
                    postsUser.map(post=> <Post post={post}/>)
                }
            </div>
        );
    }
}

export default AllPosts;