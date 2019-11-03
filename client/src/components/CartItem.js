import React from "react";
import "styles/components/CartItemStyles.scss";

// This Module requires all to work
// image = "string"
// name = "string"
// size = "string"
// category = "string"
// remove = function

function CartItem({ image, name, size, category, remove }) {
  return (
    <div className="CartItem">
      <div className="CartItem__img-container">
        <img
          className="CartItem__image"
          src={`/images/${image}.jpg`}
          alt={name}
        />
      </div>
      <div className="CartItem__info">
        <p className="CartItem__name">{name}</p>
        {size && <p className="CartItem__size">{`Size: ${size}`}</p>}
        <p className="CartItem__category">{category}</p>
        <button onClick={remove} className="CartItem__remove">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
