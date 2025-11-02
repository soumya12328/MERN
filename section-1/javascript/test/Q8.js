
// Q8 (Objects) - Create an object called student with properties: name, rollNo, marks 
// (array of 3 subjects), and city. Add a new property grade to this object. Then log only 
// the keys of the object.

const student = {
    name: 'Soumya Sharma',
    rollNo: 101,
    marks: [85, 90, 78],
    city: 'Delhi'
};

student.grade = 'A';

console.log(Object.keys(student));
