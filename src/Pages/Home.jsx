import { useContext, useEffect } from "react";
import Category from "../Components/Category";
import { Context } from "..";
import { Link } from "react-router-dom";

const Home = () => {
  const { categoriesData, setCategoriesData } = useContext(Context);

  return (
    <div className="categories--list">
      {categoriesData.map((category) => (
        <Link to={`videos/${category.category}`} key={category._id}>
          <Category
            image={category.thumbnail}
            categoryName={category.category}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
