import React from 'react';
import './Cart.css';


function Cart({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) {
    
    const totalPrice = cartItems.reduce((final_price, item) => final_price + item.quantity * item.final_price, 0);
    
    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>
            <div className="clear-cart">
                {cartItems.length >=1 && (
                    <button className="clear-cart-button" onClick={handleCartClearance}>Clear Cart</button>
                )}
            </div>
            
            {cartItems.length === 0 &&(
                 <div className="cart-items-empty">No items are added</div>
             ) }
            

             <div>
                
                 {cartItems.map((item) =>(
                     <div key={item.id} className="cart-items-list">
                        <img className="cart-items-image" src={item.img_url} alt={item.name}>

                        </img>
                        <div className="cart-items-name">{item.name}</div>
                        <div className="cart-items-function">
                            <button className="cart-items-add" onClick={() => handleAddProduct(item)}>+</button>
                            <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * ${item.final_price}

                        </div>
                     </div>

                 ))}
             </div>

             <div className="cart-items-total-price-name">Total Price
                    <div className="cart-items-total-price"> ${totalPrice}</div>

             </div>
        </div>
    );
}

export default Cart;
