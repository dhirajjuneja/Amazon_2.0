import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  function removefromBasket() {
    //Remove from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="jsx-a11y/accessible-emoji">
                🌟
              </span>
            ))}
        </div>
        <button onClick={removefromBasket}>Remove from the cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
