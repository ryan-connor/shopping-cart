import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";


const NavBar = () => {

    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
};


export default NavBar;
