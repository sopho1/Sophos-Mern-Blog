import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
   <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path='/About' element={<About />} />
        <Route path='sign-in' element={<Signin />} />
        <Route path='sign-up' element={<Signup />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='Projects' element={<Projects />} />
        
      </Routes>
   </BrowserRouter>
  )
}
