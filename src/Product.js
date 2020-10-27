import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import ProductDetails from "./ProductDetails";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <Link to={'/productDetails/' + id}>
        <ProductDetails id={id} />
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                  🌟
                </span>
              ))}
          </div>
        </div>
        <img className="product__image" src={image} alt="" />

        <button>View Deal</button>
    </Link>
      </div>
  );
}

export default Product;
