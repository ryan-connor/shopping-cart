import React from "react";
import Item from "./Item";
import beanie from "./images/beanie.jpg";
import hat from "./images/hat.jpg";
import longSleeve from "./images/longSleeve.jpg";
import scarf from "./images/scarf.jpg";
import sweater from "./images/sweater.jpg";
import tshirt from "./images/tshirt.jpg";


const Shop = (props) => {

//basically just render out shop item tiles
const shopItems = [{name:"T-Shirt", pic: tshirt, price:20, desc:"A plain white T Shirt"},{name:"Sweater",pic: sweater, price:40, desc:"A plain but cozy sweater"},{name:"Hat", pic: hat, price:15, desc:"A baseball cap with the rocket delivery logo"},{name:"Long Sleeve", pic: longSleeve, price:25, desc:"A thick grey cotton long sleeve"},{name:"Beanie", pic: beanie, price:20, desc:"A warm beanie for colder weather"},{name:"Scarf", pic: scarf, price:15, desc:"A long wrap around red scarf"}]

    return (
        <div>
            <h1 className="pageTitle">Shop</h1>
            <div id="shopTileCont">
                {shopItems.map( (item)=> {
                    return <Item name={item.name} pic={item.pic} price={item.price} getItem={props.getItem} desc={item.desc} key={item.name}/>
                })}
            </div>
        </div>
    )
};

export default Shop;
