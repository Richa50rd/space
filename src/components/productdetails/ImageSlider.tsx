import SimpleImageSlider from "react-simple-image-slider";
const images = [
  {
    url: "https://images.pexels.com/photos/2969318/pexels-photo-2969318.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/1566421/pexels-photo-1566421.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "https://images.pexels.com/photos/593163/pexels-photo-593163.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  // {
  //   url: "https://images.pexels.com/photos/2929284/pexels-photo-2929284.jpeg?auto=compress&cs=tinysrgb&w=600",
  // },
  // { url: "images/5.jpg" },
  // { url: "images/6.jpg" },
  // { url: "images/7.jpg" },
];

const Imageslide = () => {
  return (
    <div className="rounded-full">
      <SimpleImageSlider
        width={360}
        autoPlay={true}
        loop={true}
        height={420}
        images={images}
        showBullets={false}
        showNavs={true}
        style={{}}
      />
    </div>
  );
};
export default Imageslide;
