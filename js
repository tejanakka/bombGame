let timeEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let Marks = document.getElementById("marks");
let MarkGets = 30;
let containerEl = document.getElementById("container");
let anotherBtn = document.createElement("button");
let lastBtn = document.createElement("button");
lastBtn.classList.add("btn", "btn-secondary");
lastBtn.textContent = "Last Hint";
lastBtn.addEventListener("click", function() {
    let paraEl = document.createElement("p");
    paraEl.classList.add("hint-para", "m-2");
    paraEl.textContent = "Defuse or Difuse";
    MarkGets = MarkGets - 10;
    containerEl.appendChild(paraEl);
    containerEl.removeChild(lastBtn);
})
anotherBtn.classList.add("btn", "btn-secondary");
anotherBtn.textContent = "Another Hint";
anotherBtn.addEventListener("click", function() {
    let paraEl = document.createElement("p");
    MarkGets = MarkGets - 10;
    paraEl.classList.add("hint-para", "m-2");
    paraEl.textContent = "Which six-letter word means to make a bomb safe?";
    containerEl.appendChild(paraEl);
    containerEl.removeChild(anotherBtn);
    containerEl.appendChild(lastBtn);
})
let btnEL = document.createElement("button");
btnEL.classList.add("btn", "btn-secondary");
btnEL.textContent = "Generate Hint";
containerEl.appendChild(btnEL);
btnEL.addEventListener("click", function() {
    let paraEl = document.createElement("p");
    paraEl.classList.add("hint-para", "m-2");
    paraEl.textContent = "Which action makes a bomb safe?";
    MarkGets = MarkGets - 5;
    containerEl.appendChild(paraEl);
    containerEl.removeChild(btnEL);
    containerEl.appendChild(anotherBtn);
})
let countDown = 30;
let intervalId = setInterval(function() {
    countDown = countDown - 1;
    timeEl.textContent = countDown;
    if (countDown === 0) {
        timeEl.textContent = "BOOM";
        clearInterval(intervalId);
        MarkGets = 0;
        Marks.textContent = MarkGets;
    }
}, 1000);
defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countDown !== 0) {
        timeEl.textContent = "You did it !";
        clearInterval(intervalId);
        Marks.textContent = MarkGets;
    }
})
