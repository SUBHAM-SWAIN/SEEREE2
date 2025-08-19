import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
