let choices = ['rock', 'paper', 'scissors']
function genCompChoice() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function genUserChoice() {
    let userChoice = prompt('Please enter "rock", "paper", "or scissors"').toLowerCase();
    return userChoice
}
let cChoice = genCompChoice()
let pChoice = genUserChoice()
console.log(pChoice)