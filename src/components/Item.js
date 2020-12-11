import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const Item = (props) => {

    const [qty,setQty] = useState(0);
    const [name,setName]=useState(props.name);
    const [price, setPrice] = useState(props.price);

    const increment = () => {
        setQty( qty+1);
    };
    const decrement = () => {
        if (qty>0) {
            setQty( qty-1);
        };     
    };

//create a function that takes a prop callback from cart so add to cart button actually adds it, add qty, price, and name and then displays it
const SubmitToCart = () => {
    let obj = {name:name, price: price, qty: qty};
    console.log(obj);
    return obj; //return to the callback prop function
};
//also have submit to cart reset the qty to 0 for the item

    return (
        <div className="itemTile">
            <div className="pic">Image Here</div>
                <div className="itemGen">
                    <div className="itemInfo">
                        <div className="price">${price}</div>
                        <div className="qty">Qty:
                            <div id="qtyBox">{qty}</div>
                            <button onClick={increment}>+</button>
                            <button onClick={decrement}>-</button>
                        </div>        
                        
                    </div>       
                    <div className="itemDesc" id="itemName">{name}</div>
                    <div className="itemDesc">A plain T-Shirt that is nice.</div>   
                    <button id="addCart" onClick={SubmitToCart}>Add to Cart</button>
                </div>
                




        </div>
    )
};


export default Item;
