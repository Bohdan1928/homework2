import React, {Component} from 'react';
import User from "./User";

class AllUsers extends Component {

    render() {
        let {users, showPosts} = this.props
        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id} showPosts={showPosts}/>)
                }
            </div>
        );
    }
}

export default AllUsers;