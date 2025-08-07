import React from "react";
import { motion } from "framer-motion";
import galleryBanner from "../../assets/CoverImg1.png";  
import "./GalleryBanner.css";

const GalleryBanner = () => (
  <motion.div
    className="gallery-banner full-width-banner text-white position-relative d-flex align-items-center justify-content-center custom-banner"
    style={{
      backgroundImage: `url(${galleryBanner})`,
    }}
  >
    <div className="overlay"></div>
    <div className="text-center position-relative z-1 p-3">

    </div>
  </motion.div>
);

export default GalleryBanner;
