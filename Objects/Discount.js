const  DiscountType = {
	SeasonDiscount: 1,
	RegularCustomerDiscount: 2,
	CustomerDiscount: 3,
	ProductDiscount: 4
};

//Base class to determine behaviour (since we do not have interfaces)
class Discount {
	constructor( id, discountPercentage ) {
		this.id = id;
		this.discountPercentage = discountPercentage;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		throw "This should be implemented. No default method exists in prototype."
	}
}


//Season based discount. Has start and end dates to determine if discount is applicable
class SeasonDiscount extends Discount {
	constructor( id, discountPercentage, seasonStartDate, seasonEndDate) {
		super(id, discountPercentage);
		
		this.seasonStartDate = seasonStartDate;
		this.seasonEndDate = seasonEndDate;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		let dateNow = Date.now();
		let discount = 0.0;
		if(thios.seasontStartDate >= dateNow && this.seasonEndDate <= dateNow) {
			discount = price * (this.discountPercentage / 100);
		}

		return discount;
	}
}

//Regular customer discount for regular customer who have purchased enough during the year
class RegularCustomerDiscount extends Discount {
	constructor( id, discountPercentage, requiredAmountOfSales, customerAmountOfSales) {
		super(id, discountPercentage);
		this.requiredAmountOfSales = requiredAmountOfSales;
		this.customerAmountOfSales = customerAmountOfSales;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		let discount = 0.0;

		if(this.customerAmountOfSales + price >= this.requiredAmountOfSales) {
			discount = price * (this.discountPercentage / 100);
		}

		return discount;
	}
}

//Customer specific discount
class CustomerDiscount extends Discount {
	constructor( id, discountPercentage, customerId ) {
		super(id, discountPercentage);
		this.customerId = customerId;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		let discount = 0.0;
		if(this.customerId === customerId) {
			discount = price * (this.discountPercentage / 100);
		}

		return discount;
	}
}

//Product specific discount
class ProductDiscount extends Discount {
	constructor( id, discountPercentage, productId) {
		super(id, discountPercentage);
		this.productId = productId;
	}

	CalculateDiscount = function( price, productId, customerId ) {
		let discount = 0.0;

		if(this.productId === productId ) {
			discount = price * (this.discountPercentage / 100);
		}

		return discount;
	}
}

module.exports = {Discount, SeasonDiscount, RegularCustomerDiscount, CustomerDiscount, ProductDiscount, DiscountType}