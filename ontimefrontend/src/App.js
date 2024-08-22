import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import LogAndReg from './LogAndReg';
import './style.css'

function App() {
    const [token, setToken] = useState(null);

    if (!token) {
        return (
            <div>
                <div className='navbar'>
                  <h1>toTime</h1>
                </div>
                <main>    
                   {/* <Login setToken={setToken} />
                    <Register /> */}
                    <Login setToken={setToken} />
                </main>
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Kalender mit Notizen</h1>
                {/* <CalendarComponent token={token} /> */}
            </header>
        </div>
    );
}

export default App;
