import React from "react";
import Products from "./Products";
import Cart from "./Cart";
import { Route, Switch } from "react-router-dom";
   


const Routes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) =>{
    return(
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/cart" exact> 
                    <Cart cartItems={cartItems} 
                    handleAddProduct={handleAddProduct} 
                    handleRemoveProduct={handleRemoveProduct}
                    handleCartClearance={handleCartClearance}
                    />
                </Route>
            </Switch>

        </div>
    );
}

export default Routes;