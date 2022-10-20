let choices = ['rock', 'paper', 'scissors']
function genCompChoice() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoice)
}
genCompChoice()
