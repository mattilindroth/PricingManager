let Customer = require("../Objects/Customer.js");

let customers = new Array(
    new Customer.Customer( 1, "Bob's iron and steel"),
    new Customer.Customer( 2, "Sweatshop Inc" ),
    new Customer.Customer( 3, "East Indian commerce company"),
    new Customer.Customer( 4, "Paul's littlel rocket shop")
);

Add = function( name ) {
    let newCustomer =new Customer.Customer( customers.length + 1, name);
    customers.push( newCustomer );
    return newCustomer;
}

Length = function() {
	return customers.length;
}

module.exports = {customers, Add, Length}