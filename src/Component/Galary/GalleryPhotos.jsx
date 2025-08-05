import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { galleryData } from "./galleryData";
import GalleryBanner from "./GalleryBanner";
import "./GalleryPhotos.css";

const GalleryPhotos = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = galleryData.find((cat) => cat.id === categoryId);

  if (!category) return <h2>Category Not Found</h2>;

  return (
    <>
      <GalleryBanner /> 

      <div className="___pg__wrapper">
        <button className="___pg__back-btn" onClick={() => navigate(-1)}>← Back</button>
        <h2 className="___pg__title">{category.title}</h2>

        <div className="___pg__grid">
          {category.images.map((img, index) => (
            <div key={index} className="___pg__item">
              <img src={img} alt={`img-${index}`} className="___pg__img" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPhotos;
