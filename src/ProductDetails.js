import React from "react";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function ProductDetails({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Product
      id={id}
      title={title}
      price={98}
      rating={5}
      image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
    />
  );
}

export default ProductDetails;
