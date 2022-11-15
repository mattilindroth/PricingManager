
let Product = require("../Objects/Product.js");

let products = new Array(
    new Product.Product( 1, "Hammer", 12 ,6),
    new Product.Product( 2, "Screwdriver", 7.5),
    new Product.Product( 3, "Nailgun", 120),
    new Product.Product( 4, "Angle grinder", 78.9)
);

Add = function( name, price ) {
	products.push(new Product.Product( products.length + 1, name, price));
}

Length = function() {
    return products.length;
}

module.exports = {products, Add, Length}