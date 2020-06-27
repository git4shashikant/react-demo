import React from 'react';
import Welcome from "./functions/Welcome";
import './App.css';

function App() {

    return (
        <div className="App-body">
            <Welcome name=" Enjoy React"/>
            <a className="App-link" href="/button/increment">Increment Button</a>
            <a className="App-link" href="/calculator">Basic Calculator</a>
            <a className="App-link" href="/calculator/graphical">Graphical Calculator</a>
            <a className="App-link" href="/form">Form</a>
            <a className="App-link" href="/react-redux">React-redux</a>
            <a className="App-link" href="/react-redux-toggle">React-redux-toggle</a>
        </div>
    );
}

export default App;
