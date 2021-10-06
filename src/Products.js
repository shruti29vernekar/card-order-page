import React from 'react';
import "./Products.css";

const Products = ({productItems, handleAddProduct}) => {
    return (
        <div className="products">
            {productItems.map((productItems, index) => (
                <div className="card">
                    
                    <div>
                        <img className="product-img" key={productItems.id} src={productItems.img_url} alt={productItems.name}></img>
                    </div>
                    <div>
                        <h3 className="product-name" key={productItems.id} >{productItems.name}</h3>
                    </div>

                    <div className="product-final_price" key={productItems.id} >${productItems.final_price}</div>

                    <div>
                        <p className="product-description" key={productItems.id}>{productItems.description}</p>
                    </div>

                    <div>
                        <button className="product-add-button" key={productItems.id} onClick={() => handleAddProduct(productItems)}>Add to Cart</button>
                    </div>
            </div>

                
            ))}
        </div>
    );
}

export default Products;