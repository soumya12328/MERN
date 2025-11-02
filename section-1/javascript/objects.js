const user = {
    name: "Soumya",
    age: 19,
    password: "123456"
}
//console.log(user);
// console.log(user.age);//first method
// console.log(user["name"]);//second method

//for updation
user.age=25;
// console.log(user.age);
// console.log(user);

//for adding any key-pair
user.location ="Lucknow"
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));

const smartphone = {
    brand: "Samsung",
    model: "Galaxy S25 Ultra",
    price: 1250000,
    colors: ["Space Black", "Cosmic Gray", "Cloud White"]
}
// console.log(smartphone);
//console.log(smartphone.colors[0]);

smartphone.colors.push('Blue')//for add any element in array
// console.log(smartphone.colors);

smartphone.colors[2]="Mystic Silver"//for replace at particular index
// console.log(smartphone.colors);

const smartphoneArray=[
    {
brand: "Samsung",
    model: "Galaxy S25 Ultra",
    price: 1250000,
    colors: ["Gray", "Black", "White"]
    },
    {
brand: "Apple",
    model: "iPhone 15 Pro Max",
    price: 1350000,
    colors: ["Pink", "Silver", "Green"]
    },
    {
        brand: "OnePlus",
    model: "OnePlus 12",
    price: 1150000,
    colors: ["Black", " Gray", "Yellow"]
    }

]

//Print the third color of the second smartphone
//console.log(smartphoneArray[1].colors[2]);

//replace first two colors of 3rd object with "red" and "green"
smartphoneArray[2].colors.splice(0,2,"Red", "Green")
console.log(smartphoneArray[2].colors);

// add new color "yellow" to 2nd object
//  smartphoneArray[1].color.push("Yellow")
//  console.log(smartphoneArray[1].color);


// change price of 1st object to 89999
// smartphoneArray[2].price=89999
// console.log(smartphoneArray[0].price);






