import "./Product.scss";
import productImg from '../../../assets/products/earbuds-prod-1.webp'
const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={productImg} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">Product Name </span>
        <span className="price"> Price &#8377; 500</span>
      </div>
    </div>
  );
};

export default Product;
