import React from "react";
import { useNavigate } from "react-router-dom";
import { galleryData } from "./galleryData";
import "./GalleryCategory.css";

const GalleryCategory = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <div className="___pg__wrapper">
      <h2 className="___pg__title">Gallery Categories</h2>
      <div className="___pg__card-grid">
        {galleryData.map((category) => (
          <div
            key={category.id}
            className="___pg__card"
            onClick={() => handleClick(category.id)}
          >
            <img src={category.coverImage} alt={category.title} />
            <div className="___pg__card-title">{category.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCategory;
