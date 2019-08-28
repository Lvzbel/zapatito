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
      <Link className="btn btn__secondary">Perfomance Lifestyle</Link>
    </div>
  );
}

export default PromoImg;
