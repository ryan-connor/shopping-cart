import React from "react";
import {Link} from "react-router-dom";
import rocket from "./images/rocket.png";


const Home = () => {

    return (
        <div id="homeInfo">
            <h1 id="homeTitle">Home of the Original Rocket Clothes Delivery!</h1>
            <p>The only rocket clothes delivery service in the world with a 15 minute delivery guarantee!</p>
            <p>We don't have a huge selection, but when you need new clothes <b>FAST </b>there is no better service!</p>
            <p> How it works: Within minutes of putting in your order a rocket with your items will be launched from our base in Antarctica directly to your doorstep! You will get a notification when your delivery rocket is flying overhead. Look for a small parachute package containing your order!</p>
            <div id="shopLinkCont"><Link id="shopLink" to="/shop">Shop for Clothes</Link></div>
            <div id="homeImageCont"><img id="homeImage" alt="rocket" src={rocket}></img></div>
        </div>
    )
};

export default Home;
