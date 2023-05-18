import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import List from './product/list';
import Bookmark from './pages/bookmark';
import Mainpage from './pages/mainpage';



console.log('정상작동')
const App = () => {
  return (
    <Router>
    <div className="App">
      <div class="headerdiv">
      <Header/>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/product/list" element={<List />} />
        <Route path="/pages/bookmark" element={<Bookmark />} />
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
