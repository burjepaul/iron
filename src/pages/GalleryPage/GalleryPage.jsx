import React from "react";
import "./GalleryPage.css";
import img1 from '../../images/carusel/Image1.jpg'
import img2 from '../../images/carusel/Image2.jpg'
import img3 from '../../images/carusel/Image3.png'
import img4 from '../../images/carusel/Image4.png'
import img5 from '../../images/carusel/Image5.png'

const images = [
  {
    id: 1,
    title: "Mountain View",
    url: img1,
  },
  {
    id: 2,
    title: "Forest Trail",
    url: img2,
  },
  {
    id: 3,
    title: "Ocean Breeze",
    url: img3,
  },
  {
    id: 4,
    title: "City Lights",
    url: img4,
  },
  {
    id: 5,
    title: "City Lights",
    url: img5,
  },
];

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <div className="gallery-overlay"></div>
      <div className="gallery-container">
        <header className="gallery-header">
          <div>
            <h1 className="gallery-title">Creative Gallery</h1>
            <p className="gallery-subtitle">Advanced modern image layout</p>
          </div>
          <div className="gallery-search-box">
            <input type="text" placeholder="Search images..." className="search-input" />
          </div>
        </header>

        <div className="gallery-toolbar">
          <button className="filter-chip active">All</button>
          <button className="filter-chip">Nature</button>
          <button className="filter-chip">Urban</button>
          <button className="filter-chip">Abstract</button>
          <button className="filter-chip">Portrait</button>
        </div>

        <div className="gallery-featured-banner">
          <div className="featured-content">
            <span>Featured Collection</span>
            <h2>Immersive Visual Experience</h2>
            <p>Advanced premium gallery presentation with cinematic depth</p>
            <button className="view-button">Explore Collection</button>
          </div>
        </div>

        <div className="gallery-grid advanced-grid">
          {images.map((image, index) => (
            <div className={`gallery-card advanced-card card-${(index % 4) + 1}`} key={image.id}>
              <img src={`${image.url}?auto=format&fit=crop&w=1000&q=80`} alt={image.title} className="gallery-image" />
              <div className="gallery-card-overlay">
                <span className="image-tag">Featured</span>
                <h2>{image.title}</h2>
                <p>Premium visual composition</p>
                <button className="view-button">Open Preview</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}