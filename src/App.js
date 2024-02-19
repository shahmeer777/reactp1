
import React from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import About from './pages/About'
import Index from './pages/Index'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import Useeffect from './pages/Useeffect'
import Practise from './pages/Practise'
import Apidata from './pages/Apidata'
import ProductApi from './pages/ProductApi'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/useeffect" element={<Useeffect/>} />
        <Route path="/practise" element={<Practise/>} />
        <Route path="/api" element={<Apidata/>} />
        <Route path="/productapi" element={<ProductApi/>} />



      </Routes>
    </Router>
    </>
  )
}

