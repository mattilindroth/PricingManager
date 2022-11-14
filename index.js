const express = require("express");
const app = express();
const port = 3000;

const customerService = require("./services/CustomerService.js");
const productService = require("./services/ProductService.js");
const pricingService = require( "./services/PricingService.js");

app.use('/customer', customerService);
app.use('/product', productService);
app.use('/pricing', pricingService);

// Customer API
// app.get(customerApiUri, function (req, res) {
//   let cust = customerService.get(1);
//   res.send(cust);
// });

// app.post(customerApiUri, function (req, res) {
//    let cust = customerService.post(req);
//    res.send(cust); 
// });

// app.put(customerApiUri, function (req, res) {
//     let cust = customerService.put(req);
//     res.send(cust);
// });


// Product API
// app.get(productApiUri, function (req, res) {
//     let cust = productService.get(1);
//     res.send(cust);
//   });
  
//   app.post(productApiUri, function (req, res) {
//      let cust = productService.post(req);
//      res.send(cust); 
//   });
  
//   app.put(productApiUri, function (req, res) {
//       let cust = productService.put(req);
//       res.send(cust);
//   });

// Pricing API 
// app.get(pricingApiUri, function (req, res) {
//     let cust = productService.get(1);
//     res.send(cust);
//   });
  
//   app.post(pricingApiUri, function (req, res) {
//      let cust = productService.post(req);
//      res.send(cust); 
//   });
  
//   app.put(pricingApiUri, function (req, res) {
//       let cust = productService.put(req);
//       res.send(cust);
//   });

app.listen(port, function () {
  console.log(`PricingManager app listening on port ${port}!`);
});
