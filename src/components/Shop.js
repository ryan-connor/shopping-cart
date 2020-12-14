import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Item from "./Item";

const Shop = (props) => {

    //basically just render out a bunch of tiles with different props
const shopItems = [{name:"TShirt",price:20},{name:"Sweater",price:40},{name:"Hat",price:15},{name:"Long Sleeve",price:25},{name:"Beanie",price:20},{name:"Scarf",price:15}]

    return (
        <div>
            <h1>Shop</h1>
            <div id="shopTileCont">
                {shopItems.map( (item)=> {
                    return <Item name={item.name} price={item.price} getItem={props.getItem}/>
                })}
            </div>
        </div>
    )
};


export default Shop;
