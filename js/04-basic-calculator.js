/*eslint-env browser*/

//1.Prompt the user for a number and store that in a variable.
//2.Prompt the user for a second number and store that in a variable.
//3.Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.

var num1 = parseFloat(window.prompt('Enter a number'));
var num2 = parseFloat(window.prompt('Enter another number'));
var operation = window.prompt('What operation would you like to perform (add, subtract, multiply or divide)?');



//4.Create a new named function called calculate() that accepts 3 parameters.
//5.Call the calculate function and pass in the 3 variables as parameters. 
//6.Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.
//7.Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.


function calculate(n1, n2, operation) {
    'use strict';
    if (isNaN(n1) || isNaN(n2)) {
        window.alert('Must enter a number!');
    } else {
        switch (operation) {
            case "add":
                window.alert(n1 + ' + ' + n2 + ' = ' + (n1 + n2));
                break;
            case "subtract":
                window.alert(n1 + ' - ' + n2 + ' = ' + (n1 - n2));
                break;
            case "multiply":
                window.alert(n1 + ' * ' + n2 + ' = ' + (n1 * n2));
                break;
            case "divide":
                if (n2 === 0) {
                    window.alert('The second number can not be zero for division!');
                } else {
                    window.alert(n1 + ' / ' + n2 + ' = ' + (n1 / n2));
                }
                break;
            default:
                window.alert('The operation you entered is invalid!');
        }
    }
}

calculate(num1, num2, operation);
