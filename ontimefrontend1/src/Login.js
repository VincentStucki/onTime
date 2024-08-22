import React, { useState } from 'react';
import axios from 'axios';
//npm install axios
const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:3001/login', { username, password });
            setToken(res.data.token);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="logandreg">
            <h2>Login</h2>
            <label>Username</label> 
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            /> 
            <label>Password</label> 
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            /> <br />
            <button onClick={handleLogin} className="loginButton">Login</button>
        </div>
    );
};

export default Login;
