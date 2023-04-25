import React from 'react';
import Example from '../example/Example';
import logo from './logo.svg';
import './App.scss';
import UserCard from '../userCard/userCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <UserCard></UserCard>
      </header>
    </div>
  );
}

export default App;
