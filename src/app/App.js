import React from 'react';
import NavMenu from '../components/NavMenu/NavMenu';
import Header from '../components/SearchBar/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <main>
        <Header />
      </main>
    </div>
  );
}

export default App;
