import React from 'react';
import Example from '../example/Example';
import logo from './logo.svg';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import TestPage from "../../pages/testPage";
import AnotherTestPage from "../../pages/anotherTestPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/anotherTestPage" element={<AnotherTestPage />} />
        </Routes>
      <header className="App-header">        
      <Example/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
