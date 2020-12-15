import React, {useState} from "react";

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

//function to submit items to cart via the callback getItem()
const SubmitToCart = () => {
    let obj = {name:name, price: price, qty: qty};
    console.log(obj);
    props.getItem(obj);
    console.log("called callback to app from item");
    return obj; 
};

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
