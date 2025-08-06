import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from "./Component/Galary/GalleryPage";
import GalleryPhotos from "./Component/Galary/GalleryPhotos";
import "./App.css";
import HomePage from "./Component/Home/HomePage";
import Navbar from "./Component/Navbar.jsx";
import TranslateButton from "./Translater/TranslateButton.jsx";
import Footer from "./Component/Footer";
import LeadershipVision from "./Component/LeadershipVision/LeadershipVision.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:categoryId" element={<GalleryPhotos />} />
        <Route path="/vision" element={<LeadershipVision />} />
      </Routes>
      <TranslateButton />
      <Footer />
    </>
  );
}

export default App;
