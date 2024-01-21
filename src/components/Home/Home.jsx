import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
        </div>
      </div>
      Homee
    </div>
  );
};

export default Home;
