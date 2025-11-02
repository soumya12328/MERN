//1st type fuction
function addNums(num1,num2){
    sum=num1+num2
    //console.log(sum);
    
}

addNums(20,25)
addNums(45,76)

//2nd type function

let getAvg =function(n1,n2,n3){
    avg =(n1+n2+n3)/3;
    return avg;
}
let result1=getAvg(43,65,78);
let result2=getAvg(56,76,77);
console.log(result1);
console.log(result2);

//WAP to create a fnction which calculate the percentage of marks of a student. Take 5 marks.

//let getPercentage =function (a,b,c,d,e){
  //getPercentage=((a+b+c+d+e)*100)/500;
   // return getPercentage;
//}
//let result=getPercentage(23,54,52,35,65);
//console.log(result + " % ");

function getPercentage(a,b,c,d,e){
    let total =a+b+c+d+e;
    let percentage =(total/500)*100;
   return percentage;
}
let percent=getPercentage(24,65,6,35,85);
console.log("PERCENTAGE:" + percent + "%");

//Arrow Function- 3rd Type Function

const factorial=(num)=>{
    let f=1;
    for(let i=1; i<=num; i++){
        f=f*i;
    }
    return f;
    
}

let fact=factorial(7);
console.log("FACTORIAL:"+ fact);

//WAP to create a function which calculate the SIMPLE INTEREST. Take principal, rate, and time as input.

const simint =(p,r,t)=>{
    
  let  si=(p*r*t)/100;

    return si;
    
    
}

let simpleinterest=simint(100000,8.7,4)
console.log("SIMPLE INTEREST: Rs." + simpleinterest);

//WAP to create a function which calculates the area of a rectangle. Take length and 
//breadth as input.
const area=(l,b)=>{
    let a=(l*b);
    return a;
}
let areaofrectangle=area(35,65)
console.log("Area of Rectangle:" + areaofrectangle);


//WAP to create a function which finds the numbers divisible by 5 and 11 from 65 to 265.
const number=()=>{
    for(i=65;i<=265;i++){
        if(i % 5===0 && i % 11 ===0){
            console.log(i);
            
        }
    }
}
number();