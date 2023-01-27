import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
