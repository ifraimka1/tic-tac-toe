import React from 'react';
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
        <div>
          <h1>Крестики-нолики</h1>
          <Board />
        </div>
    </div>
  );
}

export default App;
