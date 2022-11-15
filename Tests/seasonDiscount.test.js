const { Discount } = require('../Objects/Discount.js');
const DiscountRepository = require('../Repository/DiscountRepository.js');
const PricingManager = require('../Objects/PricingManager.js');

const purchaseOrder = { customerId: 1, 
						products: [ 
							{ productId: 1, quantity: 3 }, 
							{ productId: 2, quantity: 5 }, 
							{ productId: 3, quantity: 2 }, 
							{ productId: 4, quantity: 1 } ]};

const pricingManager = new PricingManager();

beforeEach(() => {
	DiscountRepository.Clean();
});

test('Past discount does not affect', () => {
	let discount = DiscountRepository.GenerateDiscount( { discountType: 1, discountPercentage: 10, seasonStartDate: "2022-06-01T00:00:00", seasonEndDate: "2022-08-31T23:59:59" } )
	DiscountRepository.Add(discount);

	let discountAmount = pricingManager.CalculateDiscount( purchaseOrder , DiscountRepository.activeDiscounts )
	expect( discountAmount === 0).toBeTruthy();
});

test('Customer specific discount works', () => {
	let discount = DiscountRepository.GenerateDiscount( { discountType: 3, discountPercentage: 10, customerId: 1} )
	DiscountRepository.Add(discount);

	let totalBeforeDiscount = pricingManager.CalculatePriceWithNoDiscount( purchaseOrder );
	let discountAmount = pricingManager.CalculateDiscount( purchaseOrder , DiscountRepository.activeDiscounts )
	expect( discountAmount === 0.1 * totalBeforeDiscount ).toBeTruthy();
});