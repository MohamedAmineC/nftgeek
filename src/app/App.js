import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavMenu from '../components/NavMenu/NavMenu';
import Header from '../components/Header/Header';
import './App.css';
import Home from '../components/Home/Home';
import Active from '../Pages/Active/Active';
import Favorite from '../Pages/Favorite/Favorite';
import Search from '../Pages/search/Search';
import NftPage from '../Pages/NFTPage/NftPage';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/active" element={<Active />} />
          <Route path='/favorites' element={<Favorite />} />
          <Route path="/search" element={<Search />} />
          <Route path="/nft/:id" element={<NftPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
