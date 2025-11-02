
// Q5 (Arrays - Basic Methods) - Starting with array ['Red', 'Blue', 'Green']: 
// Add 'Yellow' at the end, add 'Purple' at the beginning, remove 'Blue' using splice, 
// then log the final array.

const color=['Red', 'Blue', 'Green']
color.push('Yellow')

color.unshift('Purple')

color.splice(2,1)
console.log(color);


