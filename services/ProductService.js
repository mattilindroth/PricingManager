const express = require('express');
let router = express.Router();

let Product = require("../Objects/Product.js");
let ProductRepository = require("../Repository/ProductRepository");

router.get('/', function(req, res) {
    res.json(ProductRepository.products);
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    if(id <= 0 || id > ProductRepository.products.length ) {
        res.status( 404 );
        res.json({message: "Not found"});
        return;
    }

    res.json(ProductRepository.products[ id -1 ]);
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
    let newProduct =new Product.Product( ProductRepository.Length() + 1, parsedProduct.name, parsedProduct.price );
    ProductRepository.Add( newProduct );
    res.json(newProduct);
})

module.exports = router

