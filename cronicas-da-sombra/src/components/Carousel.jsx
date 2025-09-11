import { useState, useEffect, useRef } from "react";
import styles from "../styles/Carousel.module.css";

import img1 from "../assets/images/imagem1.jpg";
import img2 from "../assets/images/imagem2.avif";
import img3 from "../assets/images/imagem3.jpg";
import img4 from "../assets/images/imagem4.jpg";
import img5 from "../assets/images/imagem5.jpg";

const imagens = [img1, img2, img3, img4, img5];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const intervalRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (!paused && !selectedImage) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % imagens.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, selectedImage]);

  // controle de rotação no modal
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = ((e.clientX / innerWidth) - 0.5) * 40;
    const y = ((e.clientY / innerHeight) - 0.5) * -40;
    setRotation({ x, y });
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {imagens.map((img, i) => {
          const offset = (i - index + imagens.length) % imagens.length;

          let positionClass = "";
          if (offset === 0) positionClass = styles.active;
          else if (offset === 1) positionClass = styles.nextSlide;
          else if (offset === imagens.length - 1) positionClass = styles.prevSlide;
          else positionClass = styles.hidden;

          return (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={`${styles.slide} ${positionClass}`}
              onMouseEnter={() => offset === 0 && setPaused(true)}
              onMouseLeave={() => offset === 0 && setPaused(false)}
              onClick={() => offset === 0 && setSelectedImage(img)}
            />
          );
        })}
      </div>

      {/* Modal de visualização */}
      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
          onMouseMove={handleMouseMove}
        >
          <div className={styles.modalContent}>
            <img
              src={selectedImage}
              alt="Imagem em destaque"
              style={{
                transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
              }}
              className={styles.modalImage}
            />
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
