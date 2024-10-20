// objects
const questions = {
  question1: "true",
};

const funFacts = {
  question1:
    "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days.",
};

// variables
let playerScore = document.querySelector(".player-score");
let totalScore = document.querySelector(".total-score");
let currentQuestion = document.querySelector(".main__question").textContent;
const trueBtn = document.querySelector(".main__btn-true");
const falseBtn = document.querySelector(".main__btn-false");
let funFactBox = document.querySelector(".main__fun-fact");
const nextBtn = document.querySelector(".main__btn-next");

// functions
const checkAnswer = (answer) => {
  if (answer.textContent === questions.question1) {
    trueBtn.style.background = "lightgreen";
    updateScore("correct");
  } else {
    answer.style.background = "lightpink";
    updateScore();
  }
  displayFact();
};

const displayFact = () => {
  funFactBox.textContent = funFacts.question1;
  funFactBox.style.display = "block";
};

const updateScore = (answer = "no") => {
  if (answer === "correct") {
    playerScore.textContent = +playerScore.textContent + 1;
    totalScore.textContent = +totalScore.textContent + 1;
  } else {
    totalScore.textContent = +totalScore.textContent + 1;
  }
};

// event listeners
trueBtn.addEventListener("click", () => checkAnswer(trueBtn)); // Look further into
falseBtn.addEventListener("click", () => checkAnswer(falseBtn)); // Look further
