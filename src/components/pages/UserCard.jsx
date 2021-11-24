import React from "react";
import axios from "axios";
import "./UserCard.css";






// const dummyUser = [
//   {
//     id: 1,
//     name: "John Doe",
//     username: "jdoe",
//   },
//   {
//     id: 2,
//     name: "Mark Hamil",
//     username: "hamil",
//   },
//   {
//     id: 3,
//     name: "Gus Fring",
//     username: "gfring",
//   },
// ];

function User() {

  const [user, setUser] = React.useState([]);


  //fetches the user data from the local host
  //axios.get("http://localhost:5000/exercises")



  //fetches the user data from the server
  axios.get("https://twitter-alike.herokuapp.com/exercises")
  .then(res => {
      console.log("Test")
    console.log(res.data);
    setUser(res.data);
    })

  return (
      <div className="user__card">
          {user.map((user, id) => <h1 key={id}>{user.username}</h1>)}
    </div>
  );
}

export default User;
