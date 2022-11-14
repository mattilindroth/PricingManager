class Product {
	constructor( id, name, price ) {
		this.id = id;
		this.name = name;
		this.price = price;
	}

	GetId() { return this.id;}
	GetName() {return this.name;}
	GetPrice() {return this.price;}
}

module.exports = { Product }