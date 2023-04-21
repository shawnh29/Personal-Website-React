import React, { useState } from "react";
import './Login.css'
import {  useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate()

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
        navigate("/")
    }

    return (
        <div className="container">
            <div className="form-div">
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username"> Username:</label>
                    <input type="text" placeholder="Username" name="username" onChange={handleUsername}/>
                    <br />
                    <label htmlFor="password"> Password:</label>
                    <input type="password" placeholder="Password" name="password" onChange={handlePassword} />
                    <br />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login