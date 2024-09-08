import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import Websites from "./Pages/Websites/Websites";
import SocialMedia from "./Pages/SocialMedia/SocialMedia";
import Cgi from "./Pages/Cgi/Cgi";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const scrollRef = useRef(null);

  return (
    <>
      <AnimatedCursor
        innerSize={6}
        outerSize={40}
        color="255, 255, 255"
        outerAlpha={0.3}
        innerScale={1}
        outerScale={2}
        outerStyle={{
          borderColor: "rgba(128, 128, 128, 0.5)",
          borderWidth: "2px",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={scrollRef}
      >
        <div data-scroll-container ref={scrollRef}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/website-projects" element={<Websites />} />
              <Route path="/social-media" element={<SocialMedia />} />
              <Route path="/cgi" element={<Cgi />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </LocomotiveScrollProvider>
    </>
  );
};

export default App;