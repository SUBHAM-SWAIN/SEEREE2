import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Use_State from './components/Use_State';
import Form from './components/Form';
import UseEffect from './components/UseEffect';
import StoreData from './components/Store';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use_state" element={<Use_State />} />
        <Route path="/form-handel" element={<Form/>} />
        <Route path="/use-effect" element={<UseEffect></UseEffect>} />
        <Route path="/store" element={<StoreData></StoreData>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
