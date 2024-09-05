import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header/Header'; 
import Homepage from './Pages/Homepage/Homepage'; 
import Footer from './Components/Footer/Footer';
import Websites from './Pages/Websites/Websites';
import SocialMedia from './Pages/SocialMedia/SocialMedia';
import Cgi from './Pages/Cgi/Cgi';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/website-projects' element={<Websites />} />
        <Route path='/social-media' element={<SocialMedia />} />
        <Route path='/cgi' element={<Cgi />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App