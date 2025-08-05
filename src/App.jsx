import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from './Component/Galary/GalleryPage';
import GalleryPhotos from './Component/Galary/GalleryPhotos';
import './App.css';
import HomePage from "./Component/Home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              {/* You can add more sections here if needed */}
            </>
          }
        />

        {/* Gallery Main Page */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Gallery Category Images */}
        <Route path="/gallery/:categoryId" element={<GalleryPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
