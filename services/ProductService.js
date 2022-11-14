const express = require('express');
let router = express.Router();

let Product = require("../Objects/Product.js");
let products = new Array(
    new Product.Product( 1, "Hammer", 12 ,6),
    new Product.Product( 2, "Screwdriver", 7.5),
    new Product.Product( 3, "Nailgun", 120),
    new Product.Product( 4, "Angle grinder", 78.9)
);

router.get('/', function(req, res) {
    res.json(products);
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    if(id <= 0 || id > products.length ) {
        res.status( 404 );
        res.json({message: "Not found"});
        return;
    }

    res.json(products[ id -1 ]);
});

router.post('/', function(req, res) {
    let parsedProduct = JSON.parse(req.body);
    if(parsedProduct.name === undefined || parsedProduct.name === null) {
        res.status( 500 );
        res.json({message: "name cannot be empty"});
        return;
    }
    if(parsedProduct.price === undefined || parsedProduct.price === null) {
        res.status( 500 );
        res.json({message: "price cannot be empty"});
        return;
    }
    let newProduct =new Product.Product( products.length + 1, parsedProduct.name, parsedProduct.price );
    products.push( newProduct );
    res.json(newProduct);
})

module.exports = router

