import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ["Dimuch", "Sveta", "Katya", "Viktor"]

    return (
        <div className="App">
            <ul>
                {names.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
        </div>
    );
}

export default App;
