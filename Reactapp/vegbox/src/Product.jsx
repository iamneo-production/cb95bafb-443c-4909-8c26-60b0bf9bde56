import "./Product.css";
import { useState } from "react";
const Product=({id,img,title,price,quantity})=>{
    const [state,setState]=useState(0);
    const act=()=>{
        if (state>=5) alert("Maximum Cart Limit Completed");
        else{
        setState(state+1);
        alert(state+"Product Added");
        }
    }
    return(
        <div className="card">
            <div className="card-image">
            <img src={img} alt="ji" id="ok"></img>
            </div>
            <div className="card-title">Name:  {title}</div>
            <div className="card-price">Price:  {price}</div>
            <div className="card-quantity">Quantity:  {quantity}</div>
            <div className="card-submit"><button onClick={act}>Add to Cart</button></div>
        </div>

    )
}
export default Product;
