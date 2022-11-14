const express = require('express');
let router = express.Router();

let Customer = require("../Objects/Customer.js");
let customers = new Array(
    new Customer.Customer( 1, "Bob's iron and steel"),
    new Customer.Customer( 2, "Sweatshop Inc" ),
    new Customer.Customer( 3, "East Indian commerce company"),
    new Customer.Customer( 4, "Paul's littlel rocket shop")
);

router.get('/', function(req, res) {
    res.json(customers);
});

AddCustomer = function( name ) {
    let newCustomer =new Customer.Customer( products.length + 1, name);
    customers.push( newCustomer );
    return newCustomer;
}

router.get('/:id', function(req, res) {
    let id = req.params.id;
    if(id <= 0 || id > customers.length ) {
        res.status( 404 );
        res.json({message: "Not found"});
        return;
    }

    res.json(customers[ id -1 ]);
});

router.post('/', function(req, res) {
    let parsedCustomer = JSON.parse(req.body);
    if(parsedCustomer.name === undefined || parsedCustomer.name === null) {
        res.status( 500 );
        res.json({message: "name cannot be empty"});
        return;
    }
    if(parsedCustomer.price === undefined || parsedCustomer.price === null) {
        res.status( 500 );
        res.json({message: "price cannot be empty"});
        return;
    }
    let newCustomer = AddCustomer( parsedCustomer.name );
    res.json(newCustomer);
})

module.exports = { router, AddCustomer }

