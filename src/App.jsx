

import { Routes, Route, useLocation } from "react-router-dom"; // ✅ Location needed for scroll
import { useRef, useEffect } from "react";
import GalleryPage from './Component/Galary/GalleryPage';
import GalleryPhotos from './Component/Galary/GalleryPhotos';
import FutureDevelopmentArea from './Component/Home/FutureDevelopmentArea';
import About from './Component/Home/About.jsx';
import Navbar from "./Component/Navbar.jsx";
import ImageSlider from "./Component/ImageSlider";
import Biography from "./Component/Biography"; // ✅ Import biography
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const location = useLocation();

  // Scroll to #about section if URL hash is "#about"
  useEffect(() => {
    if (location.hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <div ref={aboutRef} id="about">
                <About />
              </div>
              <FutureDevelopmentArea />
            </>
          }
        />

        {/* Biography Page Route */}
        <Route path="/biography" element={<Biography />} /> {/* ✅ Add this */}

        {/* Gallery Main Page */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Gallery Category Images */}
        <Route path="/gallery/:categoryId" element={<GalleryPhotos />} />
      </Routes>
    </>
  );
}

export default App;
