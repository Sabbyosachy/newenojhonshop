import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for(const product of cart){
        total=total+product.price;
    }
    const tax=total*0.1;
    const shipping= total>0 ? 10:0;
    const Grandtotal=tax+shipping+total;
    return (
        <div>
            <h3>Order summary</h3>
             <h4>Iteam: {props.cart.length}</h4>
             <h4>Total: ${total.toFixed(2)}</h4>
             <h4>Shipping: ${shipping}</h4>
             <h4>Tax: ${tax.toFixed(2)}</h4>
             <h4>GrandTotal : ${Grandtotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;