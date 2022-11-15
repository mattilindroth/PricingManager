const express = require('express');

const PricingManager = require('../Objects/PricingManager.js');
const PurchaseOrder = require('../Objects/PurchaseOrder.js');
const DiscountRepository = require('../Repository/DiscountRepository.js');
const ProductRepository = require('../Repository/ProductRepository.js');
const CustomerRepository = require('../Repository/CustomerRepository.js');
const Discount = require('../Objects/Discount.js');

let router = express.Router();

router.post('/', function(req, res) {
    purchaseOrder = req.body;
    const pricingManager = new PricingManager();
       
    let orderTotal = pricingManager.CalculatePriceWithNoDiscount( purchaseOrder );
    let orderDiscount = pricingManager.CalculateDiscount( purchaseOrder, DiscountRepository.activeDiscounts );

    res.json( { 'orderTotal' : orderTotal, 
                'orderDiscount' : orderDiscount } );
});

// router.get('/:id', function(req, res) {
//     let id = req.params.id;
//     if(id <= 0 || id > products.length ) {
//         res.status( 404 );
//         res.json({message: "Not found"});
//         return;
//     }

//     res.json(products[ id -1 ]);
// });

// router.post('/', function(req, res) {
//     let parsedProduct = JSON.parse(req.body);
//     if(parsedProduct.name === undefined || parsedProduct.name === null) {
//         res.status( 500 );
//         res.json({message: "name cannot be empty"});
//         return;
//     }
//     if(parsedProduct.price === undefined || parsedProduct.price === null) {
//         res.status( 500 );
//         res.json({message: "price cannot be empty"});
//         return;
//     }
//     let newProduct =new Product.Product( products.length + 1, parsedProduct.name, parsedProduct.price );
//     products.push( newProduct );
//     res.json(newProduct);
// })

module.exports = router

