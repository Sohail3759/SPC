const choices = document.querySelectorAll('#choice')
let user = document.getElementById('user')
let computers = document.getElementById('computer')
let result = document.querySelector('.result')

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("class")
        playgame(userchoice)
        compchoice();
    })
})

const playgame = (userchoice) => {
    console.log("userchoice =", userchoice)
    // generating compchoice
    const choiceofcomp = compchoice()
    console.log("compchoice =", choiceofcomp)

    if (userchoice === choiceofcomp) {
        draw()
    } else {
        winner(userchoice, choiceofcomp)
    }
}

const compchoice = () => {
    let options = ["rock", "paper", "scissor"]
    let random = (Math.floor(Math.random() * 3))
    return options[random]
}

const draw = () => {
    console.log("msth is draw");
    result.innerText = "match draw"
    result.style.backgroundColor = 'green'
}

const winner = (userchoice, choiceofcomp) => {
    if (userchoice === "rock" && choiceofcomp === "paper") {
        console.log("computer wins the game", choiceofcomp);
        result.style.backgroundColor = 'red'
        result.innerText ="computer wins the game"
    } else if (userchoice === "paper" && choiceofcomp === "rock") {
        console.log("user wins the game ", userchoice);
        result.style.backgroundColor = 'aqua'
        result.innerText ="user wins the game"
    } else if (userchoice === "rock" && choiceofcomp === "scissor") {
        console.log("user wins the game", userchoice);
        result.innerText ="user wins the game"
        result.style.backgroundColor = 'aqua'
    } else if (userchoice === "scissor" && choiceofcomp === "rock") {
        console.log("computer wins the game", choiceofcomp);
        result.style.backgroundColor = 'red'
        result.innerText ="computer wins the game"
    } else if (userchoice === "scissor" && choiceofcomp === "paper") {
        console.log("user wins the game", userchoice);
        result.innerText ="user wins the game"
        result.style.backgroundColor = 'aqua'
    } else if (userchoice === "paper" && choiceofcomp === "scissor") {
        console.log("computer wins the game ", choiceofcomp);
        result.innerText ="computer wins the game"
        result.style.backgroundColor = 'red'
    }
}
