import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { galleryData } from "./galleryData";
import GalleryBanner from "./GalleryBanner";
import "./GalleryPhotos.css";

const GalleryPhotos = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const category = galleryData.find((cat) => cat.id === categoryId);
  if (!category) return <h2>Category Not Found</h2>;

  return (
    <>
      <GalleryBanner />

      <div className="___pg__wrapper">
        <button className="___pg__back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2 className="___pg__title">{category.title}</h2>

        <div className="___pg__grid">
          {category.images.map((img, index) => (
            <div
              key={index}
              className="___pg__item"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`img-${index}`} className="___pg__img" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal with top center green cross */}
      {selectedImage && (
        <div className="___pg__modal" onClick={() => setSelectedImage(null)}>
          <div className="___pg__modal-content" onClick={(e) => e.stopPropagation()}>
            <span
              className="___pg__modal-close center-top"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
            <img src={selectedImage} alt="Enlarged" className="___pg__modal-img" />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPhotos;
