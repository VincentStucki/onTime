import React, { useState } from 'react';
import axios from 'axios';

//delete
const Register = ({setIsRegistering}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3001/register', { username, email, password });
            alert('User registered successfully');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div className="logandreg-container">
            <div className="intro-text">
            <h1>Simple, easy, flexible <br /> Calendar</h1>
            </div>
            <div className="logandreg">
            <h2>Register</h2>
            <label>Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <label>E-Mail</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <div className='buttonGroup'>
            <button onClick={() => setIsRegistering(false)} className="registerButton">Login</button>
            <button onClick={handleRegister} className="loginButton">Register</button>
            </div>
            </div>
        </div>
    );
};

export default Register;
