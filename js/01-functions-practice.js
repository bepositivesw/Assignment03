/*eslint-env browser*/

// golbal variables
var number = parseInt(window.prompt('Enter a number:'), 10);
var number2 = parseInt(window.prompt('Enter another number:'), 10);



//STEP 1
function halfNumber(n) {
    'use strict';
    var half = n / 2;
    window.console.log('Half of ' + n + ' is ' + half + '.');
    return half;
}
halfNumber(number);


//STEP 2
function squareNumber(n) {
    'use strict';
    var square = n * n;
    window.console.log('The result of squaring the number ' + n + ' is ' + square + '.');
    return square;
}
squareNumber(number);


//STEP 3
function percentOf(n1, n2) {
    'use strict';
    if (n2 !== 0) {
        var res = (n1 / n2 * 100);
        window.console.log(n1 + ' is ' + Math.round(res) + '% of ' + n2 + '.');
        return res;
    } else {
        window.alert('The second number can not be zero!\nTry again!');
    }
}
percentOf(number, number2);


//STEP 4
function findModulus(n1, n2) {
    'use strict';
    if (n2 !== 0) {
        var res = n1 % n2;
        window.console.log(res + ' is the modulus of ' + n1 + ' and ' + n2 + '.');
        return res;
    } else {
        window.alert('The second number can not be zero!\nTry again!');
    }
}
findModulus(number, number2);




//STEP 5
// to collect numbers that should be delimited by commas
var inputs = window.prompt('Please enter multiple numbers and separate each number by commas.');

// to transform inputs into a numerical array
var numbers = inputs.split(",").map(Number);
window.console.log(numbers);

// to find the sum of all of the numbers 
var i;

function sumAll(nums) {
    'use strict';
    var sum = 0;
    for (i = 0; i < nums.length; i += 1) {
        sum += nums[i];
    }
    window.console.log('The sum of all of the numbers is ' + sum + '.');
}
sumAll(numbers);
