import "../styles/brands.css";

const Brands = () => {
  return (
    <div className="brands">
      {Array.from({ length: 6 }).map((_, index) => (
        <img
          src={`./brands/fa-brands-${index + 1}.png`}
          key={index}
          className="brand"
        />
      ))}
    </div>
  );
};

export default Brands;
