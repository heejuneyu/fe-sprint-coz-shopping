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

fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
  .then(res => {
    // response 처리
    console.log(res);
    // 응답을 JSON 형태로 파싱
    return res.json();
  })
  .then(data => {
    // json 출력
    console.log(data)
  })
  .catch(err => {
    // error 처리
    console.log('Fetch Error', err);
  });

console.log('정상작동')
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
