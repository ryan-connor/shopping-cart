import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


const Cart = (props) => {

const [total, setTotal]=useState(0);

//state to hold all cart items
const [cartItems,setCartItems] = useState([]);

//function to update the total given an array of objects
const updateTotal = (arr) => {
    setTotal(
    arr.reduce( (total,item)=> {
        return total+item.price;
    },0)
    );
};

const renderCart = (arr) => {
    return (
        arr.map( (item)=> {
            return <li className="cartList"><div>{item.name}</div><div>Qty: {item.qty}</div><div>${item.price*item.qty}</div></li>;
        })
    );
};



    return (
        <div>
            <h1>Cart</h1>
            <div>
                <li className="cartList"><div>TShirt</div><div>Qty:2</div><div>$40</div></li>
                <li className="cartList"><div>Big Sweater</div><div>Qty:4</div><div>$20</div></li>
                <li className="cartList"><div>Hat</div><div>Qty:12</div><div>$100</div></li>


            </div>
        </div>
    )
};


export default Cart;
