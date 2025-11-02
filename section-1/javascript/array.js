
const arr =['Soumya' , 45 , true, undefined, null]
console.log(arr);
console.log(typeof arr);
console.log(arr.length);
console.log(arr.length-1);
console.log(Array.isArray(arr));

const movies = ['Inception' , 'Interstellar' , 'The Dark Knight' , 'Demon Slayer' ,
    'Chainsawan']

//    console.log(movies.length);//length of movies

//console.log(movies[0]);//first element
//console.log(movies[4]);//last element
//console.log(movies[movies.length-1]);//last element
//console.log(movies.indexOf('The Dark Knight'));//index value 
//console.log(movies.indexOf('Baaghi'));//-1= Not found if we give wrong element. It is case sensitive.

//console.log(movies[0]);

//console.log(movies.at(-3));//It is use for negative index
//console.log(movies);

//Replacing an element
movies[4]='John Wick 4'
//console.log(movies);

//Adding an element
movies.push('Pathaan')//push basically use to add an element at the end
//console.log(movies);
//console.log(movies.push('Pathaan'));//it basically tells the length of an array


movies.unshift('Avatar 3')//unshift basically use to add an element at the begnning
//console.log(movies);

//Removing an element
movies.pop()//remove from the end
//console.log(movies);

movies.shift()//remove from the beginning
//console.log(movies);

//Slicing in an array

// console.log(movies.slice(1,3));//reslut 1 to last -1 element
//console.log(movies.slice(2));//it will print from 2 index to last element of the array
//console.log(movies.slice(2,100));//it will not give error print from 2 index to last element of the array
//console.log(movies.slice(-4));
//console.log(movies.slice(-4,-2));

//Splicing in an array
//console.log(movies);

movies.splice(2,1)//(starting index,number of elements to a removed)
//console.log(movies);

movies.splice(1,2,'Dune','Baaghi 4')//(starting index, nuber of elements to be removed,elements to be added)
//console.log(movies);

movies.splice(2,0,'Interstellar','The dark knight')//(starting index, number of elements to be removed, elements to be added)
//console.log(movies);

movies.splice(1,2,'Avengers','Demon Slayer','Barbie')//(starting index, number of elements to be removed,elements to be added)
//console.log(movies);

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Berry', 'Mango', 'Orange'];
console.log(fruits);

// 1 - Add 'Grapes' to the end of the array.
//fruits.push('Grapes')
//console.log(fruits);

// 2 - Remove 'Banana' from the array.
//fruits.splice(1,1)
//console.log(fruits);

// 3 - Replace 'Cherry' with 'Pineapple' using splice.
//fruits.splice(2,1,'Pineapple')
//console.log(fruits);

// 4 - Add 'Fig' and 'Kiwi' after 'Date' using splice.
//fruits.splice(4,0,'fig','kiwi')
//console.log(fruits);

// 5 - Slice the array to get the three fruits after 'Banana'.
//console.log(fruits.slice(2,5));
 
// 6 - Remove elements from the array starting from index 2 to 5.
//fruits.splice(2,4)
//console.log(fruits);

// 7 - Add 'Watermelon' at index 0.
//fruits.unshift('Watermelon')
//console.log(fruits);

// 8 - Slice the array to only contain the fruit at index 3 and fruit at position 5.
//console.log(fruits.slice(3,5));

// 9 - Log the element at index -5.
//console.log(fruits.at(-5));
// 10 - Log the index of 'Mango' in the array.
//console.log(fruits.indexOf('Mango'));

// 11 - Log the fruit at the last index. (W/O using at() method or indexOf() method).
//fruits.splice(0,6)
//console.log(fruits);
//console.log(fruits[fruits.length-1]);//when we don't know the index value


// 12 - Remove the 2nd,3rd, and 4th elements from the array using splice.
//fruits.splice(1,3)
//console.log(fruits);

// 13 - Log the length of the array.
//console.log(fruits.length);

// 14 - Log index and position of 'Date', 'Banana', 'Orange' in the array.
//console.log(fruits.indexOf('Date'),fruits.indexOf('Date')+1);
//console.log(fruits.indexOf('Banana'),fruits.indexOf('Banana')+1);
//console.log(fruits.indexOf('Orange'),fruits.indexOf('Orange')+1);
















    
