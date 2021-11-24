import React, { useState } from "react";
import axios from "axios";
import "./UserTweet.css";
import "./TweetButton.css"

export function UserTweet(props) {

// const [content,setContent]=useState({})

  const [username, setUsername] = useState("");
  const [tweet, setTweet] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Tweet Button Clicked");
    const tweetInfo = {
      username: username,
      tweet: tweet,
    };
    props.handleTweet(tweetInfo);
    const uploadTweet = {
      username: tweetInfo.username,
      description: tweetInfo.tweet,
      duration: 0,
      date:"2021-11-23T11:35:08.322Z"
    }
    console.log(uploadTweet);

//post request to local host
    //axios.post("http://localhost:5000/exercises/add", uploadTweet)

    //post request to heroku
    axios.post("https://twitter-alike.herokuapp.com/exercises/add", uploadTweet)
    .then(res => console.log(res.data));
  };

  

  return (
    <div className="user__tweet">
      <label>Username</label>
      <input type="text" onChange={handleUsernameChange} />
      <label>Tweet</label>
      <input type="text" onChange={handleTweetChange} />
      <button onClick={submitHandler} className="tweet__button">
        Tweet
      </button>
    </div>
  );
  }

  export default UserTweet;