const Customer = require("../services/CustomerService");

test("Adding customer works", () => {
	let customer = Customer.AddCustomer( "Raaka-Arskan betonimurskaamo" );
	expect(customer.id === 5).toBeTruthy();
});