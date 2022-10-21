let choices = ['rock', 'paper', 'scissors']
function genCompChoice() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function genUserChoice() {
    let userChoice = prompt('Please enter "rock", "paper", "or scissors"').toLowerCase();
    return userChoice;
}
let cChoice;
let pChoice;
let pWinOrLose;
let cWinOrLose;

function resolveGame(playerChoice, computerChoice) {
    

    if (playerChoice !== 'rock' && playerChoice !== 'scissors' && playerChoice !== 'paper'){
       
        console.log('please enter only "rock", "paper", "or scissors" exactly. Im too dumb to parse the information ');
        console.log(playerChoice);
        let pChoice = genUserChoice();
        resolveGame(pChoice, computerChoice)
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
    cWinOrLose += 1
}
function winScreen() {
    console.log(`You have won with ${pChoice}, computer lost with ${cChoice} please play again!`);
    pWinOrLose += 1
}
function game() {
    for (let i = 1; i<6; i++) {
    cChoice = genCompChoice();
    pChoice = genUserChoice();
    resolveGame(pChoice, cChoice)
    console.log(`score is PLAYER: ${pWinOrLose}, COMPUTER: ${cWinOrLose}`)
    }
}
game()