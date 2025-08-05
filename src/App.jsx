// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import GalleryPage from './Component/Galary/GalleryPage';
// import GalleryPhotos from './Component/Galary/GalleryPhotos';
// import FutureDevelopmentArea from './Component/Home/FutureDevelopmentArea';
// import './App.css';
// import Navbar from "./Component/Navbar.jsx";
// // import TopBar from "./Component/TopBar.jsx";

// function App() {
//   return (
//     <>
//     {/* <TopBar /> */}
//       <Navbar />
//     <Router>
//       <Routes>
//         {/* Home Route */}
//         <Route
//           path="/"
//           element={
//             <>
//               <FutureDevelopmentArea />
//               {/* You can add more sections here if needed */}
//             </>
//           }
//         />

//         {/* Gallery Main Page */}
//         <Route path="/gallery" element={<GalleryPage />} />

//         {/* Gallery Category Images */}
//         <Route path="/gallery/:categoryId" element={<GalleryPhotos />} />
//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom"; // ❌ Don't import BrowserRouter here
import GalleryPage from './Component/Galary/GalleryPage';
import GalleryPhotos from './Component/Galary/GalleryPhotos';
import FutureDevelopmentArea from './Component/Home/FutureDevelopmentArea';
import './App.css';
import Navbar from "./Component/Navbar.jsx";
import TopBar from "./Component/TopBar.jsx";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <FutureDevelopmentArea />
              {/* Add more sections here if needed */}
            </>
          }
        />

        {/* Gallery Main Page */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Gallery Category Images */}
        <Route path="/gallery/:categoryId" element={<GalleryPhotos />} />
      </Routes>
    </>
  );
}

export default App;
