import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Header from './Components/Header/Header'; 
import Homepage from './Pages/Homepage/Homepage'; 
import Footer from './Components/Footer/Footer';
import Websites from './Pages/Websites/Websites';
import SocialMedia from './Pages/SocialMedia/SocialMedia';
import Cgi from './Pages/Cgi/Cgi';

const App = () => {
  const scrollRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // Additional options if needed
      }}
      watch={[]}
      containerRef={scrollRef}
    >
      <div data-scroll-container ref={scrollRef}>
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
      </div>
    </LocomotiveScrollProvider>
  );
};

export default App;
