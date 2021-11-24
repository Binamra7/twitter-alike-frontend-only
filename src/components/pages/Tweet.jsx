import React from "react";
import "./Tweet.css";

function Tweet(props) {
  return (
    <div className="tweet">
      <div className="tweet__header">
        <h1 style={{color:'grey',fontWeight:'bold'}}>{props.user}</h1>
        <h2>{props.tweet}</h2>
      </div>
    </div>
  );
}

export default Tweet;
