import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <img src={cat1} alt="cat1" />
          <h2>Diamond Rings</h2>
        </div>
        <div className="category">
          <img src={cat1} alt="cat1" />
          <h2>Gold Rings</h2>
        </div>
        <div className="category">
          <img src={cat1} alt="cat1" />
          <h2>Platinum Rings</h2>
        </div>
        <div className="category">
          <img src={cat1} alt="cat1" />
          <h2>Wedding Rings</h2>
        </div>
        <div className="category">
          <img src={cat1} alt="cat1" />
          <h2>Daily-Wear Rings</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
