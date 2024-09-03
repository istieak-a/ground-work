import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header/Header'; 
import Homepage from './Pages/Homepage/Homepage'; 

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App