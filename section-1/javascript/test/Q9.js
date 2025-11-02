const products = [
    { name: 'Laptop', price: 45000, category: 'Electronics', inStock: true },
    { name: 'Phone', price: 25000, category: 'Electronics', inStock: false },
    { name: 'Shirt', price: 800, category: 'Clothing', inStock: true },
    { name: 'Shoes', price: 2500, category: 'Clothing', inStock: true },
    { name: 'Watch', price: 5000, category: 'Accessories', inStock: false }
];
// Q9 (Combined Challenge) - Write a function findExpensiveProducts that takes the products 
// array and a price limit as parameters. It should return an array of product names whose 
// price is greater than the limit. Use filter and map inside the function. 
// Test with limit = 3000.