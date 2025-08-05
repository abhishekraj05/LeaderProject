import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from './Component/Galary/GalleryPage';
import GalleryPhotos from './Component/Galary/GalleryPhotos';
import './App.css';
import HomePage from "./Component/Home/HomePage";
import Footer from "./Component/Footer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:categoryId" element={<GalleryPhotos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

