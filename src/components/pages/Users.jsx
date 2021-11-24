import React from 'react'
import UserCard from './UserCard'
import "./Users.css";

function Users() {
    return (
        <div className="users">
            <h1 className="users__heading">Users</h1>
            <UserCard />
        </div>
    )
}

export default Users
