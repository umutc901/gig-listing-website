import React, { useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5175/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password }),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
            />
            <input type="submit" name="submit" value="Submit" />
        </form>
    );
}

export default Form;
