import React from 'react';
import logo from './logo.svg';
import './App.css';
const count = 999;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TypeScriptは良いぞ！
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const count = 999;
  return <span className='likeButton'>♥ {count}</span>
}

export default App;
