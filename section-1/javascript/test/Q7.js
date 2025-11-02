
const products = [
    { name: 'Laptop', price: 45000, category: 'Electronics', inStock: true },
    { name: 'Phone', price: 25000, category: 'Electronics', inStock: false },
    { name: 'Shirt', price: 800, category: 'Clothing', inStock: true },
    { name: 'Shoes', price: 2500, category: 'Clothing', inStock: true },
    { name: 'Watch', price: 5000, category: 'Accessories', inStock: false }
];

// Q7 (Map & Filter) - Using the products array above:
	// a) Use map() to create a new array with prices increased by 10%
	// b) Use filter() to get only products that are in stock
	// c) Chain map and filter to get names of only Electronics products

    const increasedPrices = products.map((p) => + (p*0.10)) 

// console.log(" Prices increased by 10%:", increasedPrices);

const inStockProducts = products.filter(item => item.inStock);
// console.log( inStockProducts);

const electronicsNames = products.filter(i=> i.category === 'Electronics')
.map(i => i.name);
console.log(electronicsNames);
