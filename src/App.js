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

//callback function to get each item from Item component, will then need to pass it as props to cart
const getItem = (info) => {
  setAppCart([...appCart,info]);
  console.log("added to appCart: "+info);
};




  return (
    <div>
 <Routes callback={getItem}/>
 </div>
  );
};

export default App;