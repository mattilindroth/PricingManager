class Discount {
	constructor( id, discounPercentage) {
		this.id = id;
		this.discountPercentage = discountPercentage;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		throw "This should be implemented. No default method exists in prototype."
	}
}

class GeneralSeasonDiscount extends Discount {
	constructor( id, discountPercentage, seasonStartDate, seasonEndDate) {
		super(id, discountPercentage);
		
		this.seasonStartDate = seasonStartDate;
		this.seasonEndDate = seasonEndDate;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		let dateNow = Date.now();
		let discount = 0.0;
		if(thios.seasontStartDate >= dateNow && this.seasonEndDate <= dateNow) {
			discount = price * (discountPercentage / 100);
		}

		return discount;
	}
}

class RegularCustomerDiscount extends Discount {
	constructor( id, discountPercentage, requiredAmountOfSales, customerAmountOfSales) {
		super(id, discountPercentage);
		this.requiredAmountOfSales = requiredAmountOfSales;
		this.customerAmountOfSales = customerAmountOfSales;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		let discount = 0.0;

		if(this.customerAmountOfSales + price >= this.requiredAmountOfSales) {
			discount = price * (discountPercentage / 100);
		}

		return discount;
	}
}

class CustomerSpecificDiscount extends Discount {
	constructor( id, discountPercentage, customerId ) {
		super(id, discountPercentage);
		this.customerId = customerId;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		let discount = 0.0;
		if(this.customerId === customerId) {
			discount = price * (discountPercentage / 100);
		}

		return discount;
	}
}

class ProductSpecificDiscount extends Discount {
	constructor( id, discountPercentage, productId) {
		super(id, discountPercentage);
		this.productId = productId;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		let discount = 0.0;

		if(this.productId === productId ) {
			discount = price * (discountPercentage / 100);
		}

		return discount;
	}
}

modules.export = {Discount, GeneralSeasonDiscount, RegularCustomerDiscount, CustomerSpecificDiscount, ProductSpecificDiscount}