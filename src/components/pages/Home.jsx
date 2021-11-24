import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Tweet from "./Tweet";

const dummyTweet = [
  {
    id: 1,
    username: "John Doe",
    tweet:
      "Hello World.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio reprehenderit, quo eos dolorem nam eaque expedita animi at repellat neque ea autem corporis, dignissimos",
    likes: 0,
    replies: 0,
  },
  {
    id: 2,
    username: "Mark Hamil",
    tweet: "Hello World",
    likes: 0,
    retweets: 0,
  },
  {
    id: 3,
    username: "Steve Jobs",
    tweet: "Hello World",
    likes: 0,
    retweets: 0,
  },
];

function Home(props) {
  const [tweet, setTweet] = useState(dummyTweet);

//   console.log(tweet);
    // console.log(props.data);
    
    

    useEffect(() => {
    //   props.data.tweet!==undefined &&
    // setTweet([
    //   {
        // id: tweet.length + 1,
        // username: props.data.username,
        // tweet: props.data.tweet,
        // likes: 0,
        // retweets: 0,          
    //   },...tweet]);
        
      //fetching data from the local host
        //axios.get("http://localhost:5000/exercises")
      
      //fetching data from the server
      //https://twitter-alike.herokuapp.com/exercises
        axios.get("https://twitter-alike.herokuapp.com/exercises")
      .then(res => {
        console.log(res.data);
          setTweet(res.data);
        
          
      })
  }, [props]);
//myArray.slice(0).reverse().map
  return (
    <div className="home">
      <h1 className="home__heading">Home</h1>
      <div className="tweet-list">
        {tweet.slice(0).reverse().map((tweet) =>
          
            <Tweet key={tweet.id} user={tweet.username} tweet={tweet.description} />
          )
        }
        )
      </div>
      {/* {finalTweet} */}
    </div>
  );
}

export default Home;
