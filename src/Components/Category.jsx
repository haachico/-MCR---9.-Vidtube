const Category = ({ image, categoryName }) => {
  return (
    <div className="category--card">
      <img src={image} alt={categoryName} />
      <h3>{categoryName}</h3>
    </div>
  );
};

export default Category;
