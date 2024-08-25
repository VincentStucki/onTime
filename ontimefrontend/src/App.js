import React, { useState } from 'react';
import './App.css';
import Login from './login';
import Register from './register';
import CalendarD from './calendarD';
import './style.css'

function App() {
    const [token, setToken] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);

    if (!token) {
        return (
            <div>
                <div className='navbar'>
                  <h1>toTime</h1>
                </div>
                <main>    
                    {isRegistering ? (
                        <Register setIsRegistering={setIsRegistering} />
                    ) : (
                        <Login setToken={setToken} setIsRegistering={setIsRegistering} />
                    )}
                </main>
            </div>
        );
    }

    return (
        <div className="App">
                <div className='navbar'>
                  <h1>toTime</h1>
                </div>
                <main>
                { <CalendarD token={token} /> }
                </main>
                
        </div>
    );
}

export default App;
