import React from 'react';
import './Hader.css'
import log from '../images/logo.png'

const Hader = () => {
    return (
        <div className="header">
            <img src={log} alt="" srcset="" />
            <div className="listIteam">
              <a href="/shop">Shop</a>
              <a href="/order">Order</a>
              <a href="/review">Review</a>
            </div>
        </div>
    );
};

export default Hader;