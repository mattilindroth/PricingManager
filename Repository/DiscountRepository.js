const Discounts = require("../Objects/Discount");

let activeDiscounts = new Array();

Add = function( newDiscount ) {
	newDiscount.id = activeDiscounts.length + 1;
	activeDiscounts.push(newDiscount);
}

Length = function() {
	return activeDiscounts.length;
}

Remove = function( id ) {
	activeDiscounts.splice(id - 1, 1);
}

Clean = function() {
    while(activeDiscounts.length > 0)
        activeDiscounts.pop();
}

GenerateDiscount = function( discount ) {
    
    let newDiscount = {};

    switch(discount.discountType) {
        case Discounts.DiscountType.CustomerDiscount:
            newDiscount = new Discounts.CustomerDiscount(activeDiscounts.length, discount.discountPercentage, discount.customerId );
            break;
        case Discounts.DiscountType.SeasonDiscount:
            newDiscount = new Discounts.SeasonDiscount(activeDiscounts.length, discount.discountPercentage, discount.seasonStartDate, discount.seasonEndDate );
            break;
        case Discounts.DiscountType.RegularCustomerDiscount:
            newDiscount = new Discounts.RegularCustomerDiscount(activeDiscounts.length, discount.discountPercentage, discount.requiredAmountOfSales, discount.customerAmountOfSales, discount.customerId );
            break;
        case Discounts.DiscountType.ProductDiscount:
            newDiscount = new Discounts.ProductDiscount(activeDiscounts.length, discount.discountPercentage, discount.productId );
            break;
        default:
            throw (500);
    }

	return newDiscount;
}

module.exports = {activeDiscounts, Add, Length, Remove, Clean, GenerateDiscount}