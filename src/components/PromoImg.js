import React from "react";
import { Link } from "react-router-dom";
import image from "../img/traveler-bagpack.jpg";
import "../styles/components/PromoImgStyles.scss";

function PromoImg() {
  const styles = {
    backgroundImage: `url(${image})`
  };
  return (
    <div className="PromoImg" style={styles}>
      <h2 className="PromoImg__header">Perfomance Lifestyle</h2>
      <Link to="/store" className="PromoImg__btn btn btn__secondary">
        Shop Now!
      </Link>
      <div className="PromoImg__transparency"></div>
    </div>
  );
}

export default PromoImg;
