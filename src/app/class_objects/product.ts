export class Category{
	id: string;
	name: string;
}

export class Product {
	category: Category;
	description: string;
	eachPrice: number;
	id: string;
	medical_characteristics: string;
	name: string;
	photos: Array<string>;
	platform: string;
	volume: string;
}

export class ItemCart{
	product: Product;
	quantity: number;
}