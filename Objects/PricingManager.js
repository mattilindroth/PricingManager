const PurchaseOrder = require('../Objects/PurchaseOrder.js');
const ProductRepository = require('../Repository/ProductRepository.js');

class PricingManager {
	constructor() {

	}

	CalculatePriceWithNoDiscount = function( purchaseOrder ) {
		let totalPrice = 0;

		purchaseOrder.products.forEach(oneProduct => {
			//Get the product with price info for productId. I'm sure there is easier way.
			let productInfo = ProductRepository.products.filter((prd) => {
				if (prd.id === oneProduct.productId)
					return true;
			});

			//TODO: assert.IsTrue( product.length == 1)
			//Calculate discount in currency
			let productOrderTotal = productInfo[0].price * oneProduct.quantity;
			totalPrice += productOrderTotal;
		});
		
		return totalPrice;
	}

	CalculateDiscount = function( purchaseOrder, discounts ) {
		let totalDiscount = 0;

		purchaseOrder.products.forEach(oneProduct => {
			//Get the product with price info for productId. I'm sure there is easier way.
			let product = ProductRepository.products.filter((prd) => {
				if (prd.GetId() == oneProduct.productId)
					return true;
			});

			//TODO: assert.IsTrue( product.length == 1)

			//Calculate discount in currency
			let productUnitPrice = product[0].price;
			let quantity = oneProduct.quantity;
			discounts.forEach(oneDiscount => {
				let discount = oneDiscount.CalculateDiscount(productUnitPrice * quantity, oneProduct.productId, purchaseOrder.customerId);
				totalDiscount += discount;
			});
		});
		return totalDiscount;
	}
}

module.exports = PricingManager