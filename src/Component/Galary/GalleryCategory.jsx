import React from "react";
import { useNavigate } from "react-router-dom";
import { galleryData } from "./galleryData";
import GalleryBanner from "./GalleryBanner";
import "./GalleryCategory.css";

const GalleryCategory = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <>
     <GalleryBanner /> 
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Media <strong>Gallery</strong></h2>
      <div className="gallery-grid">
        {galleryData.map((category) => (
          <div
            key={category.id}
            className="gallery-card"
            onClick={() => handleClick(category.id)}
          >
            <img src={category.coverImage} alt={category.title} className="gallery-image" />
            <div className="gallery-heading">{category.title}</div>
            <div className="gallery-count">{category.count} Photos</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default GalleryCategory;
