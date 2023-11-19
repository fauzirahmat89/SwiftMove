// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './Auth/login'
import Register from './Auth/register'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route path="/Auth/login" element={<Login />} />
          <Route path="/Auth/register" element={<Register />} />
          <Route path="/components/Sidebar" element={<Sidebar/>} />
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
