import './App.css';
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Item from "./components/Item";
import Shop from "./components/Shop";
import Routes from "./components/Routes";


function App() {

//state for cart items here
const [appCart, setAppCart] = useState([]);

//callback function to get each item from Item component, check if is already in cart and then add the item
const getItem = (info) => {

  let tempCart = appCart;
  let inCart = tempCart.findIndex( (item)=> {
    return item.name === info.name;
  });
  console.log("inCart:",inCart);
 
  if(inCart>-1) {
    tempCart[inCart].qty = tempCart[inCart].qty + info.qty;
  }
  else {
    tempCart= [...tempCart, info];
  }


  setAppCart([...tempCart]);
  console.log(tempCart);
};

//callback function to return full cart info
const returnItem = () => {
  console.log("returned cart:");
  console.log(appCart);
  return appCart;
};


  return (
    <div>
 <Routes getItem={getItem} returnItem={returnItem}/>
 </div>
  );
};

export default App;