// Arrays
const newQuestion = ["Strings in JS are editable values"];
const questionsAnswer = ["true", "false"];

// objects
const funFacts = {
  question1:
    "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days.",
};

// variables
let playerScore = document.querySelector(".player-score");
let totalScore = document.querySelector(".total-score");
let currentQuestion = document.querySelector(".main__question");
const trueBtn = document.querySelector(".main__btn-true");
const falseBtn = document.querySelector(".main__btn-false");
let funFactBox = document.querySelector(".main__fun-fact");
const nextBtn = document.querySelector(".main__btn-next");

// functions
const checkAnswer = (answer) => {
  if (answer.textContent === questionsAnswer[0]) {
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

const updateScore = (answer = "not correct") => {
  if (answer === "correct") {
    playerScore.textContent = +playerScore.textContent + 1;
    totalScore.textContent = +totalScore.textContent + 1;
  } else {
    totalScore.textContent = +totalScore.textContent + 1;
  }
};

const updateQuestion = () => {
  currentQuestion.textContent = newQuestion[0];
};

// event listeners
trueBtn.addEventListener("click", () => checkAnswer(trueBtn)); // Look further into
falseBtn.addEventListener("click", () => checkAnswer(falseBtn)); // Look further
nextBtn.addEventListener("click", updateQuestion);
