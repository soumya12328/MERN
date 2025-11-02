
for (let i = 0; i < 5; i++) {
    //  console.log(i);

}

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        // console.log(i);

    }
}

//WAP to print whichare divisible by 12 and not by 3 between 1 to 100

for (let a = 1; a <= 100; a++) {
    if (a % 11 == 0 && a % 3 != 0) {
        // console.log(a);
    }
}


//WAP to print all numbers which are divisible by 3 and 5 and are also odd between 186 to 1523.

for (let a = 186; a <= 1523; a++) {
    if (a % 3 == 0 && a % 5 == 0 && a % 2 != 0) {
        //console.log(a);

    }
}

//WHILE LOOP

let z = 10
while (z <= 20) {
    // console.log(z);
    //console.log("----------");

    z++;
}

//break statement
correct_password = "admin123"

password = "admin123"

while (password == correct_password) {
    // console.log("CORRECT PASSWORD");
    break;

}

//continue statement
let i = 1
while (i <= 5) {
    i++
    if (i == 3) {
        continue;
    }
    // console.log(i);

}

//do while loop

let b = 15
do {
    b++;
    // console.log(b);

}
while (b <= 15)

//WAP to print all the numbers which are divisible by 7 and 11 between 1 to 1000.

let n = 1
while (n <= 1000) {
    if (n % 7 == 0 && n % 11 == 0) {
        console.log(n);
    }
    n++;
}