import React from 'react';

import Header from './components/Header';
import DisplayCard from './components/DisplayCard';

import './App.css';

function App() {
  return (
    <main className="App flex flex-wrap justify-center">
      <Header />
      <DisplayCard />
    </main>
  );
}

export default App;
