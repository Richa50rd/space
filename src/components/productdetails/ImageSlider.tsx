import SimpleImageSlider from "react-simple-image-slider";
const images = [
  {
    url: "https://images.pexels.com/photos/2969318/pexels-photo-2969318.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/2969318/pexels-photo-2969318.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/593163/pexels-photo-593163.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/2929284/pexels-photo-2929284.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

const Imageslide = () => {
  return (
    <div>
      <SimpleImageSlider
        width={360}
        autoPlay={true}
        loop={true}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default Imageslide;
