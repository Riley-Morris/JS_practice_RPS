let cChoice;
let pChoice;
let pWinOrLose = 0;
let cWinOrLose = 0;


let choices = ['rock', 'paper', 'scissors']
function genCompChoice() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function resolveGame(playerChoice, computerChoice) {
    

    if (playerChoice === computerChoice) {
        removeElementsByClass('scores')
        const container = document.querySelector('#scorebox')
        const scoreUpdate = document.createElement('span');
        scoreUpdate.classList.add('scores')
        scoreUpdate.textContent = `You have both selected ${playerChoice}, please play again!`
        container.appendChild(scoreUpdate)
        console.log();
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

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function loseScreen() {
    removeElementsByClass('scores')
    const container = document.querySelector('#scorebox')
    const scoreUpdate = document.createElement('span');
    scoreUpdate.classList.add('scores')
    scoreUpdate.textContent = `You have lost with ${pChoice}, computer won with ${cChoice}!`
    container.appendChild(scoreUpdate)
    cWinOrLose++
}
function winScreen() {
    removeElementsByClass('scores')
    const container = document.querySelector('#scorebox')
    const scoreUpdate = document.createElement('span');
    scoreUpdate.classList.add('scores')
    scoreUpdate.textContent = `You have won with ${pChoice}, computer lost with ${cChoice}!`
    container.appendChild(scoreUpdate);
    pWinOrLose++
}

function game(clickID) {
    cChoice = genCompChoice();
    pChoice = clickID.target.id;
    resolveGame(pChoice, cChoice)
    //game end here
    if (pWinOrLose >= 5 || cWinOrLose >= 5) { {
        removeElementsByClass('scores')
        const container = document.querySelector('#scorebox')
        const scoreUpdate = document.createElement('span');
        scoreUpdate.classList.add('scores')
        scoreUpdate.textContent = `End of game`
        container.appendChild(scoreUpdate);
        removeElementsByClass('scoresTwo')
        
        if (pWinOrLose > cWinOrLose) {
            const containerTwo = document.querySelector('#scoreboxTwo')
            const scoreUpdateTwo = document.createElement('span')
            scoreUpdateTwo.classList.add('scoresTwo')
            scoreUpdateTwo.textContent = `The final score is PLAYER: ${pWinOrLose}, COMPUTER: ${cWinOrLose}. CONGRATS on the win!`
            containerTwo.appendChild(scoreUpdateTwo) 
            
        }else {
            const containerTwo = document.querySelector('#scoreboxTwo')
            const scoreUpdateTwo = document.createElement('span')
            scoreUpdateTwo.classList.add('scoresTwo')
            scoreUpdateTwo.textContent = `The final score is PLAYER: ${pWinOrLose}, COMPUTER: ${cWinOrLose}. Better luck next time!`
            containerTwo.appendChild(scoreUpdateTwo)
        }
         
    
    }}else{
        removeElementsByClass('scoresTwo')
        const containerTwo = document.querySelector('#scoreboxTwo')
        const scoreUpdateTwo = document.createElement('span')
        scoreUpdateTwo.classList.add('scoresTwo')
        scoreUpdateTwo.textContent = `The score is PLAYER: ${pWinOrLose}, COMPUTER: ${cWinOrLose}`
        containerTwo.appendChild(scoreUpdateTwo)  
}}

function buttonHider(){
    const buttons = document.querySelectorAll('.rps')
    buttons.forEach((button) => {
        const compStyles = window.getComputedStyle(button)
        const displayStyle = compStyles.getPropertyValue('display')
        if (displayStyle === 'none'){
            button.style.display = 'block'
            playButton.style.display = 'none' 
        }
    })
}


const buttons = document.querySelectorAll('.rps')
buttons.forEach((button) => {
button.addEventListener('click', game)})
const playButton = document.querySelector('#playButton')
playButton.addEventListener('click', buttonHider)



 