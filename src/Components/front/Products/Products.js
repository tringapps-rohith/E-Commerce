import React,{useState} from "react";
import "./Products.css";
import data from "../../data/Data";
const Products=({btn,productItems,addProduct,addItem,cartItems})=>{

    return( 
        
    <div className="products">
        
        {productItems.map((productItem)=>(
            <div className="card">
                <div>
                    
                    <img className="product-image"
                    src={productItem.image}
                    alt={productItem.name}
                    />
                    {/* {productItem.name} */}
                </div>
                <div>
                    <h3>{productItem.name}</h3>
                </div>
                <div className="product-price">Rs. {productItem.price}</div>
                <div>
                    <button className="product-add-button" onClick={()=>addItem(productItem)}>{btn(productItem)?"Remove from Cart":"Add to Cart"}</button>
                    {/* <button className="product-add-button" onClick={()=>removeProduct(productItem)}>Remove from Cart</button> */}
                    
                    
                </div>
            </div>
        ))}
    </div>);

}

export default Products;