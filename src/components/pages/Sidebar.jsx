import React from 'react'
import UserTweet from '../usertweet/UserTweet'
import Users from './Users'

function Sidebar(props) {

    const handleTweet = (item) => {
        // console.log(item);
        // console.log('tweet');
        props.tweetDisplay(item);

    }

    return (
        <div>
            <Users />
            <UserTweet handleTweet={handleTweet}/>
        </div>
    )
}

export default Sidebar
