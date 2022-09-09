import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/videos/:videoId" element={<Video></Video>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
