const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const customerService = require("./services/CustomerService.js");
const productService = require("./services/ProductService.js");
const discountService = require( "./services/DiscountService.js");
const purchaseOrderService = require( "./services/PurchaseOrderService.js" );

// parse application/json
app.use(bodyParser.json());

app.use('/customer', customerService);
app.use('/product', productService);
app.use('/discount', discountService);
app.use('/purchaseorder', purchaseOrderService);

app.listen(port, function () {
  console.log(`PricingManager app listening on port ${port}!`);
});
