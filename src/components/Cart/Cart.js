import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    return (
        <div>
            <h2>Selected Cloths</h2>
            {
                cart.map(product => <p>{product.name}</p>)
            }
            <button className='choose-one'>CHOOSE 1 FOR ME</button>
            <button className='choose-again'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;