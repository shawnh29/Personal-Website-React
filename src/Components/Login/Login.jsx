import React, { useState } from "react";
import './Login.css'
import Home from "../Home/Home";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) => {
        event.preventDefault()
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Username: ", username,  " Password: ", password)
    }

    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input type="text" value={username} onChange={handleUsername}/>
                </label>
                <br />
                <label> Password: 
                    <input type="password" value={password} onChange={handlePassword} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login