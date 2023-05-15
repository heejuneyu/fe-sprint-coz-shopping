import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import styled from 'styled-components';
import Itemlistpage from './pages/itemlistpage';
import Bookmarkpage from './pages/bookmarkpage';
import Mainpage from './pages/mainpage';



const App = () => {
  return (
    <Router>
    <div className="App">
      <div class="headerdiv">
      <Header/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/itemlistpage" element={<Itemlistpage />} />
        <Route path="/bookmarkpage" element={<Bookmarkpage />} />
      </Routes>
      <mainpage></mainpage>
      </div>
      <div class="footerdiv">
      <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;
