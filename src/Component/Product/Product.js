import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';


const Product = (props) => {
    const{name,price,img,category,seller,stock,star}=props.product;
    return (
        <div className="allProduct">
            <div className="images">
               <img src={img} alt="" srcset="" />
            </div>
            <div className="info">
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <h5>Category:{category}</h5>
            <h6>Seller:{seller}</h6>
            <p>Stock out only {stock} are availabeler</p>
            <Rating className="rate" readonly emptySymbol="far fa-star"
             fullSymbol="fas fa-star"
             initialRating={star}>
            </Rating>
            <br />
            <button onClick={()=>props.handleAddtocart(props.product)} className="btn"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;