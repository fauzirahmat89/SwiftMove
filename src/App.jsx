// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './Auth/login'
import Register from './Auth/register'
import Sidebar from './components/Sidebar'
import Detail from './pages/Detail'
import Booking from './pages/booking'
import Sign from './pages/Sign'
import SignUp from './pages/SignUp'
import Service from './pages/Service'
import HomeMitra from './Mitra/HomeMitra'

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
          <Route path="/Detail" element={<Detail/>}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Booking' element={<Booking />}></Route>
          <Route path='/Sign' element={<Sign />}></Route>
          <Route path='/Service' element={<Service/>}></Route>
          <Route path='/HomeMitra' element={<HomeMitra />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
