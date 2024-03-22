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
    result.innerText = "match draw"
    result.style.backgroundColor = 'green'
}

const winner = (userchoice, choiceofcomp) => {
    if (
            (userchoice === "rock" && choiceofcomp === "paper") ||
            (userchoice === "scissor" && choiceofcomp === "rock") ||
            (userchoice === "paper" && choiceofcomp === "scissor") 
       ) {
           result.style.backgroundColor = 'red'
           result.innerText = "computer wins the game"
           computerscore++
        } else if (
         (userchoice === "paper" && choiceofcomp === "rock") ||
         (userchoice === "rock" && choiceofcomp === "scissor") ||
         (userchoice === "scissor" && choiceofcomp === "paper") 
    ) {
        result.style.backgroundColor = 'aqua'
        result.innerText = "user wins the game"
        userscore++
    }
    use.textContent = ` ${userscore}`;
    comp.textContent = ` ${computerscore}`;
}
