const nums = [5, 8, 6, 9, 3, 1, 0, 7, 4, 2]
//for Loop
for (let i = 0; i < nums.length; i++) {
  //console.log(nums[i]);

}
console.log("-------------");


//For...of Loop)(disavantage is we can't strict the index value its means from where we have to start to end) )

for (let i of nums) {
  // console.log(i);

}
//console.log("--------");

//forEach Method

nums.forEach((e, i, a) => {
  // console.log(e,i,a);

})

//WAP to store the Square of each element of nums in a new array

const sqr = []

nums.forEach((element) => {
  sqr.push(element * element);

})
//console.log(sqr);

//WAP to store all even numbers from array in a new array

const even = []
nums.forEach((e) => {
  if (e % 2 == 0) {
    even.push(e)
  }
})
console.log(even);

const prices = [340, 580, 100, 7540, 953]

// Store all prices greater than 500 in a new array

//1:Method
//const p=[]
//for(let i=0;i<prices.length;i++){
//  if(prices[i]>500){
//    p.push(prices[i])
//}
//}
//console.log(p);
//2:Method
//const p=[]
//prices.forEach((e)=>{
//  if(e>500){
//    p.push(e)
//}
//})
//console.log(p);


// Add 18% GST to all prices and store in a new array
//1:Method
//const GST=[]
// for(let i=0;i<prices.length;i++){
//let newprice=prices[i]+(prices[i]*0.18)
//GST.push(newprice)
//}
//console.log(GST);

//2:Method
//const GST = []
//prices.forEach((p) => {
  
  //  let newprice = p + (p * 0.18)
    //GST.push(newprice)
//})
//console.log(GST);

// Apply discount of 17% on all prices and store in a new array
//1:Method
//const d=[]
// for(let i=0;i<prices.length;i++){
//let newprice=prices[i]-(prices[i]*0.17)
//d.push(newprice)
//}
//console.log(d);

//2:Method
//const d=[]
//prices.forEach((p)=>{

//let newprice=p+(p*0.18)
//d.push(newprice)

//})
//console.log(d);

// Find the sum of all prices in the array

//let sum=0;
//for(let i=0; i<prices.length; i++){
//  sum=sum+prices[i]
//}
//console.log(sum);

//Find the average of all prices in the array

let sum=0;
for(let i=0; i<prices.length; i++){
  sum=sum+prices[i]
}
 avg=sum/prices.length
console.log(avg);
