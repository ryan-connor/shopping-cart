import React, {useState} from "react";

const Item = (props) => {

    const [qty,setQty] = useState(0);

    const name = props.name;
    const price = props.price;
    const desc = props.desc;
    const picture = props.pic;

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
    let obj = {name:name, price: price, qty: qty, desc:desc};
    // console.log(obj);
    props.getItem(obj);
    // console.log("called callback to app from item");
    return obj; 
};

    return (
        <div className="itemTile">
            <div className="pic"><img className="tileImage" src={picture} alt={name}></img></div>
                <div className="itemGen">
                    <div className="itemInfo">
                        <div className="price">${price}</div>
                        <div className="qty">Qty:
                            <div id="qtyBox">{qty}</div>
                            <button className="qtyButton" onClick={increment}>+</button>
                            <button className="qtyButton" onClick={decrement}>-</button>
                        </div>        
                        
                    </div>       
                    <div className="itemDesc" id="itemName">{name}</div>
                    <div className="itemDesc">{desc}</div>   
                    <button id="addCart" onClick={SubmitToCart}>Add to Cart</button>
                </div>
        </div>
    )
};

export default Item;
