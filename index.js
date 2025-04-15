//console.log('Hello Monica');
//window.alert('Hi there Monica');
//prompt('Hi Monica, how are you?')
console.log(Math.random());

/*
Array methods
Splice()
let arrOfShapes = ['circle', 'rectangle', 'triangle', 'pentagon'];
arrOfShapes.splice(2, 0, 'square', 'trapezium');
console.log(arrOfShapes);
*/

//adding two or more arrays using concat() method

/*
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);
console.log(arr3);
*/
//Objects
/*
 let myCar = {
                make: 'toyota',
                model: 'BMW',
                color: 'white',
                year: 2026

             };
let car1 = myCar['color'];
let car2 = myCar.make;
console.log(car2);
myCar['color'] = 'grey';
console.log(myCar['color']);
car1 = 'forSale';
myCar[car1] = true;
console.log('For Sale:', myCar.forSale);

*/

// Course Project
/*

let inventory = [];
let items = [
                {
                    name: 'soap',
                    model:'menengai',
                    cost: 179,
                    quantity: 1,
                },
                {
                    name:'sugar',
                    model: 'kabras',
                    cost: 357,
                    quantity:2
                },
                {
                    name:'rice',
                    model: 'merrysgold',
                    cost: 460,
                    quantity: 2
                }
            ];
    
inventory.push(...items);
console.log(inventory);
console.log(inventory[2].quantity);
*/

// Number guessing game project
/*
const min = 1;
const max = 100;
const result = Math.floor(Math.random() * (max - min + 1));

let attempt = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);
    //console.log(typeof guess, guess);

    if(isNaN(guess)) {
        window.alert('Please enter a valid number');
    }
    else if(guess < min || guess > max) {
        window.alert('Please enter a valid number between 1 and 100');
    }
    else {
        attempt++;
    }


    running = false;
}
*/

/*
Filter method

let arr = ['squirrel', 5, 'monn', new Date(), true];

function checkString(element, index) {
    return typeof element === 'string';
}
let filterArr = arr.filter(checkString);
console.log(filterArr);

*/

/*
Mapping arrays
let arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map(x => x + 1);
console.log(mappedArr);

*/
/*

let arrPeople = ['momi', 'kay', 'paul', 'khaks', 'kay', 'maina', 'momi'];
let filteredArr = arrPeople.filter((value, index, array) => {
    console.log(`Index: ${index}, Value:${value}, First occurrence: ${array.indexOf(value)}`);
    return array.indexOf(value) === index; //keep only the first occurrence
})
console.log('Unique names:', filteredArr);

*/
// Counter Program

const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');

let count = 0;
increaseBtn.onClick = function (){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onClick = function (){
    count--;
    countLabel.textContent = count;
}