const CustomerRepository = require("../Repository/CustomerRepository.js");

test("Adding customer works", () => {
	let customer = CustomerRepository.Add( "Raaka-Arskan betonimurskaamo" );
	expect(customer.id === 5).toBeTruthy();
});