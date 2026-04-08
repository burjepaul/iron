import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./CarousellComponent.css";
import img1 from './../../images/carusel/Image1.jpg'
import img2 from './../../images/carusel/Image2.jpg'
import img3 from './../../images/carusel/Image3.png'
import img4 from './../../images/carusel/Image4.png'
import img5 from './../../images/carusel/Image5.png'

const images = [img1, img2, img3, img4, img5];

export default function CenterFocusCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <button className="carousel-btn" onClick={() => paginate(-1)}>
          <ChevronLeft />
        </button>

        <div className="carousel-track">
          <motion.img
            key={prevIndex}
            src={images[prevIndex]}
            className="carousel-side left"
            animate={{ x: -240, scale: 0.82, opacity: 0.6, rotate: -6 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              className="carousel-center"
              initial={{ x: direction > 0 ? 120 : -120, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction > 0 ? -120 : 120, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) paginate(-1);
                if (info.offset.x < -100) paginate(1);
              }}
            />
          </AnimatePresence>

          <motion.img
            key={nextIndex}
            src={images[nextIndex]}
            className="carousel-side right"
            animate={{ x: 240, scale: 0.82, opacity: 0.6, rotate: 6 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          />
        </div>

        <button className="carousel-btn" onClick={() => paginate(1)}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
