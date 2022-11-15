const express = require('express');
let router = express.Router();

let Customer = require("../Objects/Customer.js");
let customerRepository = require("../Repository/CustomerRepository.js");

router.get('/', function(req, res) {
    res.json(customerRepository.customers);
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    if(id <= 0 || id > customerRepository.Length() ) {
        res.status( 404 );
        res.json({message: "Not found"});
        return;
    }

    res.json(customerRepository.customers[ id -1 ]);
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
    let newCustomer = customerRepository.Add( parsedCustomer.name );
    res.json(newCustomer);
})

module.exports = router

