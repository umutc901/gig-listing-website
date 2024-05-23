import React, { useState } from 'react';

const Form = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        const inputEl = event.target;
        setUsername(inputEl.value);        
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        event.preventDefault();
        fetch("http://localhost:5175/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password}),
        });

    };
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input 
                type="username" 
                name="username" 
                value={username}
                onChange = {handleUsernameChange}
                />
            </label>
            <label>
                Password
                <input 
                type="password" 
                name="password" 
                value={password}
                onChange = {handlePasswordChange}
                />
            </label>
            <label>
                Submit
                <input type='submit'
                name='submit' />
            </label>
        </form>
    )
}

export default Form;