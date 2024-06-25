const gameDivs = document.querySelectorAll(".game-img-div")
let options = ["stone", "paper", "scissor"]
let userWin = true;
let msg = document.querySelector("#msg")
let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user-score")
let compScorePara=document.querySelector("#comp-score")

// showWinner logic
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win")
        msg.innerText = `Yea win!! ${userChoice} win over ${compChoice} `
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you loose")
        msg.innerText = `Ahha loose!! ${userChoice} defeat against ${compChoice}`
        msg.style.backgroundColor = "red"
    }
}


// Draw Game logic
let drawGame = () => {
    console.log("Game is Draw")
    msg.innerText = "Draw!! play again"
    msg.style.backgroundColor = "black"
}

// 3. Generate Computer Choice
gencompChoice = () => {
    let randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}
//2. Playgame logic
playGame = (userChoice) => {
    // userChoice
    console.log(`user choice = ${userChoice}`)
    // computerChoice
    const compChoice = gencompChoice()
    console.log(`computer choice = ${compChoice}`)

    // Check the winner logic
    if (userChoice === compChoice) {
        drawGame()
    } else {
        // let userWin = true;
        if (userChoice === "stone") {
            // compChoice=paper,scissor
            userWin = compChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            // compChoice=stone,scissor
            userWin = compChoice === "stone" ? true : false;
        } else {
            // userChoice=scissor
            // compChoice=stone,paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
// step-1(add eventListner to every box)
gameDivs.forEach((gamediv) => {
    gamediv.addEventListener("click", () => {
        const userChoice = gamediv.getAttribute("id")
        playGame(userChoice)
    })
})


