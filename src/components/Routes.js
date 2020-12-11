import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Item from "./Item";
import Shop from "./Shop";
import NavBar from "./NavBar";



const Routes = (props) => {


    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/shop" component={Shop}/>
                <Route exact path="/cart" component={Cart}/>
            </Switch>
        </Router>
    )
};


export default Routes;
