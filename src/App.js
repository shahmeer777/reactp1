
import React from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import About from './pages/About'
import Index from './pages/Index'
import Services from './pages/Services'
import Contact from './pages/Contact'



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
    </Router>
  )
}

