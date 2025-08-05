<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from './Component/Galary/GalleryPage';
import GalleryPhotos from './Component/Galary/GalleryPhotos';
import FutureDevelopmentArea from './Component/Home/FutureDevelopmentArea';
import './App.css';
=======
import './App.css'
import HomePage from './Component/Home/HomePage'
>>>>>>> c26ab570cfc2f9de2551bb109e5016c549314077

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <FutureDevelopmentArea />
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
=======
    <>
    <HomePage/>
    </>
  )
>>>>>>> c26ab570cfc2f9de2551bb109e5016c549314077
}

export default App;
