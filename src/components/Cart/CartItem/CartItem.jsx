import "./CartItem.scss";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import productImg from "../../../assets/products/watch-prod-3.webp";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="search-result-item" onClick={() => {}}>
        <div className="image-container">
          <img src={productImg} alt="" />
              </div>
              
        <div className="prod-details">
          <span className="name">product-Name</span>
          <MdClose
            className="close-btn"
            onClick={() => {}}
                  />
                
          <div className="quantity-buttons">
            <span onClick={() => {}}>
              -
            </span>
            <span>5</span>
            <span onClick={() => {}}>
              +
            </span>
                  </div>
                  
          <div className="text">
            <span>3 </span>
            <span> x</span>
            <span className="highlight">
              <span>&#8377;</span>
              1245
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
