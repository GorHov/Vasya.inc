import React, { useState } from 'react';
import './ImageGallery.scss';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [showAll, setShowAll] = useState(false);

  const firstRowImages = showAll ? images.slice(0, 6) : images.slice(0, 5);
  const remainingImages = images.length - 5;

  const gridTemplateColumns = `repeat(${Math.min(images.length, 6)}, 1fr)`;

  return (
    <div className="image-gallery" style={{ gridTemplateColumns }}>
        {firstRowImages.map((image, index) => (
          <img key={index} src={image} alt="Gallery"/>
        ))}
        {remainingImages > 0 && !showAll && (
          <div className="overlay" onClick={() => setShowAll(true)}>
            <img src={images[5]} alt="Placeholder" />
            <div className="P_L_bold">{`Еще ${remainingImages} фото`}</div>
          </div>
        )}
        {showAll && images.slice(6).map((image, index) => (
          <img key={index+6} src={image} alt="Gallery"/>
        ))}
    </div>
  );
};

export default ImageGallery;
