import React from "react";

const Cart = (props) => {

const renderCart = (arr) => {
    // console.log("tried to render cart from cart");
    return (
        arr.map( (item)=> {
            return <li key= {"li" + item.name} className="cartList">
                    <div key={item.name}>{item.name}</div>
                    <div key={"qty"+item.name}>Qty: {item.qty}</div>
                    <div key={"price"+item.name}>${item.price*item.qty}</div>
                    <button key={"button"+item.name}className="cartRemoveButton" onClick={removeItem} data-key={item.name}>Remove</button>
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

const emptyCart = (arr) => {
    
    if (arr.length===0){
        return (
            <div id="emptyCart">There are No Items Currently in your Cart!</div>
        );
    } 
};

const removeItem = (e) => {
    // console.log("target is:",e.target.getAttribute("data-key"));
let toRemove = e.target.getAttribute("data-key");
props.removeItem(toRemove);
// console.log("from cart, tried to remove:",e.target);
};

    return (
        <div>
            <h1 className="pageTitle">Cart</h1>
            <div>
                {renderCart(props.returnItem())}
                {emptyCart(props.returnItem())}
                {renderTotal(props.returnItem())}
            </div>
        </div>
    )
};


export default Cart;
