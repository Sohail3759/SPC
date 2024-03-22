const choices = document.querySelectorAll('#choice')
let computers = document.getElementById('computer')
let result = document.querySelector('.result')
let use = document.querySelector('.user')
let comp = document.querySelector('.computer')

let userscore = 0;
let computerscore = 0;


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("class")
        playgame(userchoice)
        compchoice();
    })
})

const playgame = (userchoice) => {
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
    if (
            (userchoice === "rock" && choiceofcomp === "paper") ||
            (userchoice === "scissor" && choiceofcomp === "rock") ||
            (userchoice === "paper" && choiceofcomp === "scissor") 
       ) {
           console.log("computer wins the game", choiceofcomp);
           result.style.backgroundColor = 'red'
           result.innerText = "computer wins the game"
           console.log(computerscore++);
           computerscore + 1
        } else if (
         (userchoice === "paper" && choiceofcomp === "rock") ||
         (userchoice === "rock" && choiceofcomp === "scissor") ||
         (userchoice === "scissor" && choiceofcomp === "paper") 
    ) {
        console.log("user wins the game ", userchoice);
        result.style.backgroundColor = 'aqua'
        result.innerText = "user wins the game"
        console.log(userscore++);
        userscore + 1
    }
    use.textContent = ` ${userscore}`;
    comp.textContent = ` ${computerscore}`;
}
