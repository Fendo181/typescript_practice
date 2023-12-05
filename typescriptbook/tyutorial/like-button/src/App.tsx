import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  return <span>ここにボタンが出る予定です</span>
}

export default App;
