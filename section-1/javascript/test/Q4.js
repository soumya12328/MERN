
// Q4 (Functions) - Create an arrow function called calculateDiscount that takes two parameters:
//  price and discountPercent. It should return the final price after applying the discount. 
// Test it with price = 1000 and discountPercent = 20.

const calculateDiscount =(price , discountPercent)=>{
    let discount = (price * discountPercent) / 100;
    let finalPrice = price - discount;
    return finalPrice;
};

let result = calculateDiscount(1000, 20);
console.log("Final Price after discount:", result);
