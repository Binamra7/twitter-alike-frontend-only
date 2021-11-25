import React from "react";
import "./Tweet.css";

function Tweet(props) {
  return (
    <div className="tweet">
      <div className="tweet__header">
        <h1 style={{ color: "grey" }}>{props.user}</h1>
        <h2
          style={{
            color: "white",
            width: "700px",
            fontWeight:"200",
            borderTop: "1px solid white",
          }}
        >
          {props.tweet}
        </h2>
      </div>
    </div>
  );
}

export default Tweet;
