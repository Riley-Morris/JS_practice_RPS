let choices = ['rock', 'paper', 'scissors']
function genCompChoice() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function genUserChoice() {
    let userChoice = prompt('Please enter "rock", "paper", "or scissors"').toLowerCase();
    return userChoice;
}
let cChoice = genCompChoice();
let pChoice = genUserChoice();

function resolveGame(choice1, choice2) {
    if (choice1 === choice2) {
        console.log(`You have both selected ${choice1}, please play again!`);
    }else if (choice1 === 'scissors' && choice2 === 'rock') {
       loseScreen(); 
    }else if(choice1 === 'scissors' && choice2 === 'paper') {
        winScreen();
    }else if(choice1 ==='rock' && choice2 ==='scissors') {
        winScreen();
    }else if(choice1 ==='rock' && choice2 ==='paper') {
        loseScreen();
    }else if(choice1 === 'paper' && choice2 === 'rock') {
        winScreen();
    }else {
        loseScreen();
    }
}
console.log(pChoice)
console.log(cChoice)

function loseScreen() {
    console.log(`You have lost! with ${cChoice}, computer won with ${pChoice} please play again!`);
}
function winScreen() {
    console.log(`You have won! with ${cChoice}, computer lost with ${pChoice} please play again!`);
}
