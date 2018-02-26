/*eslint-env browser*/

//A.Begin by prompting the user for their choice.
var choiceA = window.prompt('Enter one of the following items:\n        Rock, Paper or Scissors');
var choiceB = window.prompt('Enter one of the following items:\n        Rock, Paper or Scissors');
choiceA = choiceA.toLowerCase();
choiceB = choiceB.toLowerCase();
window.console.log('Person A chose: ' + choiceA);
window.console.log('Person B chose: ' + choiceB);

//B.Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than B options, there will be 3 here.
var ranNum = Math.ceil(Math.random() * 3);
var computerChoice;


//3.Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
if (ranNum === 1) {
    computerChoice = 'rock';
    window.console.log("Computer's choice: " + computerChoice);
} else if (ranNum === 2) {
    computerChoice = 'paper';
    window.console.log("Computer's choice: " + computerChoice);
} else {
    computerChoice = 'scissors';
    window.console.log("Computer's choice: " + computerChoice);
}


//4.Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//5.What if the result ends in a tie? Figure out how to handle that as well.
//6.What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.




// to compare choices and display the result
function compareChoices(pA, pB) {
    'use strict';
    if (pA === pB) {
        window.alert('You got a tie! Try more!');
    } else {
        switch (computerChoice) {
            case "rock":
                if (pA === 'paper') {
                    window.alert('The winner is person A!');
                } else if (pB === 'paper') {
                    window.alert('The winner is person B!');
                } else {
                    window.alert('Nobody won... Try again!');
                }
                break;
            case "paper":
                if (pA === 'scissors') {
                    window.alert('The winner is person A!');
                } else if (pB === 'scissors') {
                    window.alert('The winner is person B!');
                } else {
                    window.alert('Nobody won... Try again!');
                }
                break;
            case "scissors":
                if (pA === 'rock') {
                    window.alert('The winner is person A!');
                } else if (pB === 'rock') {
                    window.alert('The winner is person B!');
                } else {
                    window.alert('Nobody won... Try again!');
                }
                break;
        }
    }
}
//compareChoices(choiceA, choiceB);



// to check if user's choice is valid
var choices = ['rock', 'paper', 'scissors'];

function checkChoice(pA, pB) {
    'use strict';
    if (choices.indexOf(pA) > -1 && choices.indexOf(pB) > -1) {
        compareChoices(pA, pB);
    } else {
        window.alert('Invalid choice!');
    }
}
checkChoice(choiceA, choiceB);
