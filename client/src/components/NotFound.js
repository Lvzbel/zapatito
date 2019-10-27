import React from "react";
import "styles/components/NotFoundStyles.scss";
import lost_tourist from "img/404.png";

function NotFound() {
  return (
    <div className="NotFound">
      <div className="NotFound__container">
        <img
          src={lost_tourist}
          alt="Lost tourist looking at a map"
          className="NotFound__image"
        />
        <h2 className="NotFound__header">This Page is Not on the Map</h2>
        <p className="NotFound__text">
          You told your friends you weren’t bringing your phone, to try and
          experience what travel was like back in the day. You bought a map and
          a bottle of water and carried your camera for the money shot. But the
          map was from 2005 and the landscape had changed. So here you are, in
          the middle of a large field, that the map continues to claim is a
          local grocer.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
