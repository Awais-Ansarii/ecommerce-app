import "./Banner.scss";
import ring from "../../../assets/ring.jpg";
const Banner = () => {
  return (
    <div className="hero-banner">
      {/* <div className="content"> */}
        {/* <div className="text-content">
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div> */}
        <img className="banner-img" src={ring} alt="banner-img" />
      {/* </div> */}
    </div>
  );
};

export default Banner;
