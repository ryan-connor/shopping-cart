## Shopping Cart App
Shopping Cart/simple Ecommerce app frontend.

## Description

Shopping cart/ecommerce app frontend made with React. Users can navigate multiple pages, add items to a cart and then view the cart. Items can be added by a user chosen quantity, and items can then be deleted from the final cart. The cart displays a running total price of all the items in it.

## Why?

The main purpose of this project was to play with React Router to create multiple routes/pages in an app and then allow user interactions on one page to modify what a different page will display. All components in this project are functional components that make use of hooks to track state. This was a cool project to see how a slightly larger SPA with multiple views/routes could be made with React Router, and how information can be passed between the different child components through props and callbacks. The most challenging part of this project was organizing the logic to pass info between the various components like tracking items/quantities that were added from the shop to the cart, tracking if an item was removed from the cart, and making sure item quantities/prices behaved properly as items were added/removed. It was also fun to design a simple shopping type website with item tiles and a recognizable shopping cart that at least somewhat resembles a typical ecommerce site. This project focused purely on making the frontend of a shopping site, but it could be made into a simple fullstack app by hooking up an API in the shop component to fetch item data and by adding a checkout component to deal with payments/POST the order to the backend.

## Usage/Install

Clone the project and then cd into the folder.

To install the dependencies, with [npm](https://npmjs.org/) installed, run

```
$ npm install
```

To run the app in development mode, run

```
$ npm start
```

To build the app for production, run

```
$ npm run build
```
