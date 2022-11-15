const express = require('express');

let router = express.Router();

const Discounts = require("../Objects/Discount.js");
const DiscountRepository = require("../Repository/DiscountRepository.js");

router.get('/', function( req, res ) {
    res.json(DiscountRepository.activeDiscounts);
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    if(id <= 0 || id > DiscountRepository.Length() ) {
        res.status( 404 );
        res.json({message: "Not found"});
        return;
    }

    res.json(DiscountRepository.activeDiscounts[ id -1 ]);
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;
    if(id === undefined || id === null || id <= 0 || id > DiscountRepository.Length()) {
        res.status( 404 );
        res.json({message: "Not found"})
        return;
    }
    DiscountRepository.Remove(id);
});

router.post('/', function(req, res) {
    let parsedDiscount = req.body;
    if(parsedDiscount.discountPercentage === undefined || parsedDiscount.discountPercentage === null) {
        res.status( 500 );
        res.json({message: "discountPercentage cannot be empty"});
        return;
    }
    if(parsedDiscount.discountType === undefined || parsedDiscount.discountType == null) {
        res.status( 500 );
        res.json({message: "discountType cannot be empty"});
        return;
    }
    let newDiscount = DiscountRepository.GenerateDiscount( parsedDiscount );
    DiscountRepository.Add(newDiscount);

    res.json(newDiscount);
})

module.exports = router

