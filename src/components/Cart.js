import React from "react";

const Cart = (props) => {

const renderCart = (arr) => {
    console.log("tried to render cart from cart");
    return (
        arr.map( (item)=> {
            return <li className="cartList">
                    <div>{item.name}</div>
                    <div>Qty: {item.qty}</div>
                    <div>${item.price*item.qty}</div>
                    <button className="cartRemoveButton" onClick={removeItem} data-key={item.name}>Remove</button>
                </li>;
        })
    );
};

const renderTotal = (arr) => {
    return (
        <li id="cartTotal" className="cartList"><div>Total</div><div></div><div>$
            {arr.reduce( (total, item) => {
            return total + (item.price*item.qty);
            },0)}
        </div></li>
    );
};

const removeItem = (e) => {
    console.log("target is:",e.target.getAttribute("data-key"));
let toRemove = e.target.getAttribute("data-key");
props.removeItem(toRemove);
console.log("from cart, tried to remove:",e.target);
};

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {renderCart(props.returnItem())}
                {renderTotal(props.returnItem())}
            </div>
        </div>
    )
};


export default Cart;
