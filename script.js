let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // console.log(options[1]);
    const randInx = Math.floor(Math.random() * 3); //0,1,2
    return options[randInx];
}


const drawGame = () => {
    console.log("Draw game");
    msg.innerText = "Draw!! Play Again🤔";
    msg.style.backgroundColor = "purple";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win😁");
        msg.innerText = `You Win😁😁!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose🤔");
        msg.innerText = `You Lose😒✌️!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#FF570A";
    }
}


const playGame = (userChoice) => {
    console.log("user choice =",userChoice);

    //generate computer choice
    const compChoice = genComputerChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        //draw
        drawGame();
    }

    else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //userchoice === "scissors";
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // console.log("choice clicked");
        const userChoice = choice.getAttribute("id");
        // console.log("choice clicked", userChoice);

        playGame(userChoice);
    })
});


