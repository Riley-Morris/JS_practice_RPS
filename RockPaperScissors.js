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

function resolveGame(playerChoice, computerChoice) {
    if (pChoice != 'rock' || pChoice != 'scissors' || pChoice != 'paper'){
        console.log('please enter only "rock", "paper", "or scissors" exactly. Im too dumb to parse the information ');
        let pChoice = genUserChoice();
        resolveGame()
    }else if (playerChoice === computerChoice) {
        console.log(`You have both selected ${playerChoice}, please play again!`);
    }else if (playerChoice === 'scissors' && computerChoice === 'rock') {
       loseScreen(); 
    }else if(playerChoice === 'scissors' && computerChoice === 'paper') {
        winScreen();
    }else if(playerChoice ==='rock' && computerChoice ==='scissors') {
        winScreen();
    }else if(playerChoice ==='rock' && computerChoice ==='paper') {
        loseScreen();
    }else if(playerChoice === 'paper' && computerChoice === 'rock') {
        winScreen();
    }else {
        loseScreen();
    }
}


function loseScreen() {
    console.log(`You have lost with ${pChoice}, computer won with ${cChoice} please play again!`);
}
function winScreen() {
    console.log(`You have won with ${pChoice}, computer lost with ${cChoice} please play again!`);
}

resolveGame(pChoice, cChoice)