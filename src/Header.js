import React from "react";
import {Link } from "react-router-dom";
import "./Header.css";

 

function Header({cartItems}){
    return(
        <header className="header">
            <div>
                <h1>
                     <Link to="/" className="logo">Happay</Link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/" className="cart">Home</Link>
                    </li>
                </ul>
                
                <ul>
                    <li>
                        <Link to="/Cart" className="cart">Cart</Link>
                        <i class="fas fa-shopping-cart"></i>
                        <span className="cart-length">
                            {cartItems.length === 0? "" : cartItems.length}
                        </span>
                    </li>
                </ul>
            </div>

        </header>
    );
}

export default Header;