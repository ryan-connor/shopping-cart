import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


const Home = () => {



    return (
        <div>
            <h1>Home of the original Rocket Fast Food</h1>
            <div>The only rocket food delivery service in the world!</div>
            <div> How it works: Within minutes of putting in your order a rocket with your food will be launched from our base in Antartica directly to your doorstep!</div>
            <div>In approximately 5-15 minutes of putting in your order look for a rocket flying overhead to drop a small parachute package containing your hot and fresh order!</div>
            <div id="shopLinkCont"><Link id="shopLink" to="/shop">Shop for Meals</Link></div>
        </div>
    )
};


export default Home;
