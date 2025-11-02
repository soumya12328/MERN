const nums = [75, 92, 34, 85, 65, 22]

const n = []
nums.forEach(e => {
    n.push(e * e)
});
//console.log(n);

//MAP Method

const sqr = nums.map(n => n * n)
//console.log(sqr);

const prices = [340, 580, 100, 7540, 953]
// Add 18% GST to all prices and store in a new array
const gst = prices.map((p) => p + (p * 0.18))
//console.log(gst);

// Apply discount of 17% on all prices and store in a new array
const discount = prices.map((p) => p - (p * 0.17))
//console.log(discount);


const prices2 = ['₹340.56', '₹580.50', '₹100.74', '₹7540.10', '₹953.86']
const cleanprices = prices2.map((p) => {
    return parseInt(p.slice(1))
})
//console.log(cleanprices);

//Filter method

const even = nums.filter((n) => n % 2 == 0)
console.log(even);

const names = ['Vaibhav', 'Soumya', 'Anmol', 'Prince', 'Vivek', 'Ayushman', 'Arpita', 'Aman']

const upper = names.map((n) => n.toUpperCase())
console.log(upper);

const endWithA = names.filter((n) => {
    return n[(n.length) - 1] === 'a'
})
console.log(endWithA);

const fullNames = ['Vaibhav Singh', 'Soumya Sharma', 'Anmol Kumar', 'Prince Dubey', 'Vivek Raj',
    'Ayushman Gupta', 'Arpita Kumari', 'Aman Singh', 'Akash Raj']

    console.log(fullNames.includes('Soumya Sharma'));
    

const firstNames = fullNames.map((n) => {
    return n.split(' ')[0]
})
//console.log(firstNames);

// const prices = [340, 580, 100, 7540, 953];

const p = prices.filter((n) => n > 500)
//console.log(p);

const a=names.filter((n)=>{
    return n.length <=  5
})
//console.log(a);

const decimals =[2.3, 3.14, 5.3, 8.9, 6.4, 9.1, 4.5]
// first convert in integer and than fliter out even numbers and print also
console.log(decimals.map((d)=> parseInt(d)).filter((d)=> d % 2 == 0));

