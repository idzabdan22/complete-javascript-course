'use strict'; // use strict mode (for debugging purpose)    

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log('I can drive');


// function fruitJuice(apples){
//     return `Juice with ${apples} apples`;
// }

// console.log(fruitJuice(10));


// // fuction expression
// const calAge = function (birthYear) { // Anonymous function
//     console.log("fuction called");
//     return 2022 - birthYear;
// }
// console.log(calAge(2001));

// // arrow fuction 
// const calAge1 = (birthYear, name) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `My name is ${name}, my age is ${2022 - birthYear}, i have ${retirement} left before retirement`;
// }
// console.log(calAge1(2002, "abdan"));

// function both_avg(dol_avg, koal_avg) {
//     return (dol_avg + koal_avg)/2;
// }

// const avg = (score1, score2, score3) => (score1 + score2 + score3)/3;
// const koala_result = avg(65,54,49);
// const dolphine_result = avg(44,23,71);
// const both_aveg = both_avg(koala_result, dolphine_result);
// const checkWinner = function (koala, dolphine) {
//     let winner = '';
//     if (koala >= dolphine * 2) {
//         winner = 'koala';
//     } else if (dolphine >= koala * 2){
//         winner = 'dolphine';
//     } else {
//         winner = 'NO ONE WINS'
//     }
//     return winner;
// }
// console.log(koala_result, dolphine_result, both_aveg, checkWinner(koala_result, dolphine_result));

// // array declaration
// const friends = ['abdan', 'idza', 'hurmuzi'];
// const car_brand = new Array('ford', 'nissan', 'toyota');
// console.log(car_brand[car_brand.length - 1]);
// const array_campur = ['abdan', friends, car_brand, 2022 - 2001];

// // basic array operation
// // push
// const car_brands = ['toyota', 'nissan', 'suzuki'];
// const newLength = car_brands.push('ferrari'); // add elements at the end of an array
// console.log(newLength);
// // // unshift
// car_brands.unshift('subaru'); // add elements at the start of an array
// console.log(car_brands);
// // // pop
// car_brands.pop();
// console.log(car_brands); // remove elements from end of an array
// // // shift
// car_brands.shift();
// console.log(car_brands); // remove elements from start of an array
// // // index of
// console.log(car_brands.indexOf('toyota')); // know the elements index
// // // includes
// console.log(car_brands.includes('toyota')); // know if the elements contain the parameter (return true)
// console.log(car_brands.includes('yamaha')); // return false

// // coding challenges
// const bill = [125, 555, 44];
// const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 15/100 : bill * 20/100;
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// const total = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]];
// console.log(bill, tip, total);

// const jonas = {
//     first_name : "jonas",
//     last_name : "jonaskuy",
//     age : 2022 - 2001,
//     job : "Programmer",
//     friends : ['surya', 'adi', 'joko'] 
// };
// console.log(jonas);
// console.log(jonas.first_name);
// console.log(jonas['age']);
// console.log(jonas['friends'][0]);
// const afterfix = '_name';
// console.log(jonas['first' + afterfix]);
// const access = prompt("What do you want to access?\n\ first_name, last_name, age, job, friends");
// console.log(access);
// if (jonas[access]){
//     console.log(jonas[access]);
// } else {
//     console.log("Doesnt exist!");
// }

// jonas.location = 'Malang';
// jonas['instagram'] = '@dan.idzz';

// console.log(`${jonas.first_name} has ${jonas.friends.length} friends`);
// console.log(`his bestfriend is ${jonas.friends[0]}`);

// const jonas = {
//     first_name : "jonas",
//     last_name : "jonaskuy",
//     birthYear : 2001,
//     job : "Programmer",
//     friends : ['surya', 'adi', 'joko'],
//     hasDriverLicense: true,

//         // calcAge: function (birthYear) { // Method (function inside the object)
//         //     return 2022 - birthYear;
//         // }
//     // calcAge: function (){
//     //     console.log(this);
//     //     return 2022 - this.birthYear;
//     // }
//     calcAge: function (){
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(jonas);
// console.log(jonas['calcAge']());
// console.log(jonas.age);



// const jonas = {
//     name: 'Jonas',
//     age: 46,
//     job: 'Teacher',
//     hasDriverLicense: true,
//     getSummary: function (){
//         return `${this.name} is a ${this.age}-year old ${this.job}, and he has ${(this.hasDriverLicense) ? 'a' : 'no'} driver license`;
//     }
// }

// console.log(jonas.getSummary());


// Coding Challenges
// const mark = {
//     fullname : 'Mark Miller',
//     mass : 78,
//     height : 1.69,
//     calcBMI: function (){ 
//         this.bmi = this.mass / this.height ** 2;
//     }
// };

// const john = {
//     fullname : 'John Smith',
//     mass : 92,
//     height : 1.95,   
//     calcBMI: function (){ 
//         this.bmi = this.mass / this.height * this.height;
//     }
// };

// console.log(mark.calcBMI());
// // console.log(john.calcBMI());
// console.log(mark.bmi);

// (mark.bmi > john.bmi) ? console.log(`Mark's BMI ${mark.bmi} is higher than John's ${john.bmi}`) : console.log(`John's BMI ${john.bmi} is higher than Mark's ${mark.bmi}`);


// coding challenge loops

const bill = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
];

const tip = [], total = [];

let count = 0;
while(count < 10){
    if(bill[count] >= 50 && bill[count] <= 300) {
        tip.push(bill[count] * 15/100);
        total.push(tip[count] + bill[count]);
    } else {
        tip.push(bill[count] * 20/100);
        total.push(tip[count] + bill[count]);
    }
    count++;
}

const calcAvg = arr => {
    let sum = 0, count = 0;
    while(count < 10) {
        sum += arr[count];
        count++;
    }
    return sum/arr.length;
}

console.log("==================Data Each");
console.log(bill);
console.log(tip);
console.log(total);
console.log("==================AVG Each");
console.log(calcAvg(bill));
console.log(calcAvg(tip));
console.log(calcAvg(total));






















































