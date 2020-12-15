import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop";
import NavBar from "./NavBar";

const Routes = (props) => {

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/shop" render={()=> <Shop getItem={props.getItem}/>}/>
                <Route exact path="/cart" render={()=> <Cart returnItem={props.returnItem} removeItem={props.removeItem}/>}/>
            </Switch>
        </Router>
    )
};

export default Routes;
