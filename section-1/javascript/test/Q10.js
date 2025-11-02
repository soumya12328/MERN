const products = [
    { name: 'Laptop', price: 45000, category: 'Electronics', inStock: true },
    { name: 'Phone', price: 25000, category: 'Electronics', inStock: false },
    { name: 'Shirt', price: 800, category: 'Clothing', inStock: true },
    { name: 'Shoes', price: 2500, category: 'Clothing', inStock: true },
    { name: 'Watch', price: 5000, category: 'Accessories', inStock: false }
];
// Q10 (Comprehensive Problem) - Using the products array:
// -	Use a for...of loop to find the product with the highest price
// -	Log the product name and price
// -	Use a while loop with a counter to log "Checking inventory..." 3 times

let highestProduct = products[0]; 

for (const product of products) {
    if (product.price > highestProduct.price) {
        highestProduct = product;
    }
}

console.log(`Highest Priced Product: ${highestProduct.name} - ₹${highestProduct.price}`);

let counter = 0;
while (counter < 3) {
    console.log("Checking inventory...");
    counter++;
}
