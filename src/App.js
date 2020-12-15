import './App.css';
import React, {useState} from "react";
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

//function to remove items from cart
const removeItem = (info) => {
  let tempCart = appCart;
  let cartIndex = tempCart.findIndex( (item)=> {
    console.log("item:",item,"info:",info);
    return item.name === info;
  });
console.log("index to remove:",cartIndex);
  tempCart.splice(cartIndex,1);

  setAppCart([...tempCart]);
  console.log(tempCart);
};

  return (
    <div>
 <Routes getItem={getItem} returnItem={returnItem} removeItem={removeItem}/>
 </div>
  );
};

export default App;