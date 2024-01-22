import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products/>
        </div>
      </div>
      Homee
    </div>
  );
};

export default Home;
