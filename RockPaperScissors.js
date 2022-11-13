let cChoice;
let pChoice;
let pWinOrLose = 0;
let cWinOrLose = 0;


let choices = ['rock', 'paper', 'scissors']
function genCompChoice() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function genUserChoice(clickID) {
    pChoice = clickID.target.id
    console.log(pChoice)
    game()
    return pChoice;
}

function resolveGame(playerChoice, computerChoice) {
    

    if (playerChoice === computerChoice) {
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
    cWinOrLose++
}
function winScreen() {
    console.log(`You have won with ${pChoice}, computer lost with ${cChoice} please play again!`);
    pWinOrLose++
}
function game() {
    if (pWinOrLose < 5 || cWinOrLose < 5) {
        cChoice = genCompChoice();
        resolveGame(pChoice, cChoice)
}else {
    console.log('end of game, put more here')
}
    
    console.log(`score is PLAYER: ${pWinOrLose}, COMPUTER: ${cWinOrLose}`)
    
    console.log(`End of game, final score is PLAYER: ${pWinOrLose}, COMPUTER: ${cWinOrLose}`)
}
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
button.addEventListener('click', genUserChoice)})