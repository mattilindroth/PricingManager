
class PurchaseProduct {
	constructor( productId, quantity ) {
		this.productId = productId;
		this.quantity = quantity;
	}
}

class PurchaseOrder {

	products = new Array();

	constructor( customerId ) {
		this.customerId = customerId;
	}

	AddProduct( productId, quantity  ) {
		let existingPurchaseProduct = this.products.filter(function(purchaseProduct) {
			if(purchaseProduct.productId === productId)
				return true;
		});
		if( existingPurchaseProduct.length === 1 ) {
			existingPurchaseProduct[0].quantity += quantity;
		} else {
			this.products.push(newPurchaseProduct);
		}
	}
}	