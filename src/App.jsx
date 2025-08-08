import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from "./Component/Galary/GalleryPage";
import GalleryPhotos from "./Component/Galary/GalleryPhotos";
import "./App.css";
import HomePage from "./Component/Home/HomePage";
import Navbar from "./Component/Navbar.jsx";
import TranslateButton from "./Component/Translater/TranslateButton.jsx";
import NotFound from "./Component/NotFound";
import Footer from "./Component/Footer";
import LeadershipVision from "./Component/LeadershipVision/LeadershipVision.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Biography from "./Component/Biography/Biography.jsx";
import ImageSlider from "./Component/ImageSlider/ImageSlider.jsx";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function App() {

  // Inside App() function
const location = useLocation();
useEffect(() => {
  ScrollTrigger.refresh();
}, [location]);


  return (
    <>
      <Navbar />
      <ImageSlider />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Biography />} />
        <Route path="/vision" element={<LeadershipVision />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:categoryId" element={<GalleryPhotos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <TranslateButton />
      <Footer />
    </>
  );
}

export default App;
