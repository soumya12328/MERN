
let a = 5

if (a % 2 == 0) {

   let msg = "Even hi hai!!"

   const b = 20

   var c = "This is var"
   console.log("even")

}
else {
   console.log("odd")

}

//console.log(msg); // ReferenceError msg is not defined
//console.log(b);
//console.log(c); // var is function scoped or globally scoped

//WAP to check if a user is able to vote or not

let age = 17

if (age >= 18) {
   console.log("eligible")

}
else {
   console.log("NOt eligible")

}

//WAP to print whether a number is divisible by 3 and 12

num1 = 12
if(num1 % 3==0 && num1 %12===0){
   console.log("DIVISIBLE");
   
}
else{
   console.log("NOt DIVISIBLE");
   
}

//WAP to print whether a number is divisible by 3 OR 12

num1 = 55
//if(num1 % 3==0 || num1 %12===0){
  // console.log("DIVISIBLE");
   
//}
//else{
  // console.log("NOt DIVISIBLE");
   
//}

if(num1 % 3==0 && num1 %11===0){
   console.log("diisible by both");
   
}
else if(num1 % 3 ==0){
   console.log("divisible by 3");
   
}
else if(num1 % 11 ==0){
   console.log("divisible by 11");
   
}
else{
   console.log("Not diisible by both");
   
}

// WAP to check if a number is a perfect square

let num2 =49

const root = num2 ** 0.5
console.log(root);

if(Number.isInteger(root)){
   console.log("Perfect Square -" + root);
   
}

else{
   console.log("NOT perfect square");
   
}
