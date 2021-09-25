import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    const[displayui,setDisplayui]=useState([]);

    useEffect(()=>{
     fetch('products.JSON')
     .then(res=>res.json())
     .then(data=>{
         setProducts(data);
        setDisplayui(data);
        });

    },[]);
    const handleAddtocart=(product)=>{
      const newcart=[...cart,product];
      setCart(newcart);
    }
    const handleSearch=event=>{
        const searchtext=event.target.value;
        const matchpro=products.filter(product=>product.name.toLowerCase().includes(searchtext.toLowerCase()));
        setDisplayui(matchpro);

    }
    return (
        <div>
          <div className="SearchBox">
              <input type="text" onChange={handleSearch} placeholder="Search Your Iteams" /><FontAwesomeIcon className="icon" icon={faShoppingCart} />
          </div>
        
        <div className="conatiner">
            <div className="product-conatainer">
             {
                displayui.map(product=><Product product={product} handleAddtocart={handleAddtocart}></Product>)
             }
            </div>
            <div className="cart-container">
             <Cart cart={cart}></Cart>
            </div>
            
        </div>
        </div>
    );
};

export default Shop;