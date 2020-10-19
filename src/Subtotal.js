import React from 'react';
import './Subtotal.css';
import CurrecyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrecyFormat renderText={(value) => (
                <>
                <p>
                    Subtotal ({0} items):
                    <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal__gift"><input type="checkbox" />
                The order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value = {0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={'$'}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
 