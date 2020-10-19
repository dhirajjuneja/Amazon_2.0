import React from "react";
import "./Subtotal.css";
import CurrecyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getTotal = () => {
    for (let i = 0; i < basket.length; i++) {
      const element = basket[i].price;

      for (let i = 0; i < basket[i].price; i++) {
          let pr = basket[i].price;
          
          
      } {
        //   let dollar = basket[i].price;
        //   let total1 = basket[0].price;
        //   let total2 = basket[1].price;
        //   let total = total1 + total2
        //   console.log(total);
        //   console.log(dollar);
        console.log(price);
      }
    }
  };
  return (
    <div className="subtotal">
      <CurrecyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              The order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal()}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
