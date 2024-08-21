import { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    if (images.length > 1) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [images]);
  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};
export default ImageSlider;
