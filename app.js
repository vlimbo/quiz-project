// Arrays
const newQuestion = [
  "",
  "Strings in JS are editable values",
  "1 + 1 === 2",
  "'1' + '1' === '2'",
  "typeof ['J','S'] === 'array'",
];
const questionsAnswer = ["true", "false", "true", "false", "false"];
const funFacts = [
  "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days.",
  "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can be replaced with new, different strings",
  "the plus operator gives the sum of two numbers",
  "The plus operator concatenates strings, '1' + '1' becomes '11'",
  "Arrays are type object, not arrays",
];

// variables
let currentQuestionCounter = 0;
let currentQuestion = document.querySelector(".main__question");
let playerScore = document.querySelector(".player-score");
let totalScore = document.querySelector(".total-score");
const trueBtn = document.querySelector(".main__btn-true");
const falseBtn = document.querySelector(".main__btn-false");
let funFactBox = document.querySelector(".main__fun-fact");
const nextBtn = document.querySelector(".main__btn-next");

// functions
const checkAnswer = (answer) => {
  if (answer.textContent === questionsAnswer[currentQuestionCounter]) {
    if (answer.textContent === "true") {
      trueBtn.style.background = "lightgreen";
      updateScore("correct");
    } else {
      falseBtn.style.background = "lightgreen";
      updateScore("correct");
    }
  } else {
    answer.style.background = "lightpink";
    updateScore("not correct");
  }
  displayFact();
};

const displayFact = () => {
  funFactBox.textContent = funFacts[currentQuestionCounter];
  funFactBox.style.display = "block";
};

const updateScore = (answer) => {
  if (answer === "correct") {
    playerScore.textContent = +playerScore.textContent + 1;
    totalScore.textContent = +totalScore.textContent + 1;
  } else {
    totalScore.textContent = +totalScore.textContent + 1;
  }
  trueBtn.disabled = true;
  falseBtn.disabled = true;
  if (currentQuestionCounter === questionsAnswer.length - 1) {
    finishQuiz();
  }
};

const updateQuestion = () => {
  currentQuestionCounter++;
  resetValues();
  currentQuestion.textContent = newQuestion[currentQuestionCounter];
};

const resetValues = () => {
  trueBtn.style.backgroundColor = ""; // This is wicked
  falseBtn.style.backgroundColor = ""; // This is wicked
  trueBtn.disabled = false;
  falseBtn.disabled = false;
  funFactBox.style.display = "";
};

const finishQuiz = () => {
  nextBtn.textContent = "No more questions!";
  nextBtn.style.backgroundColor = "gray";
  nextBtn.disabled = true;
};

// event listeners
trueBtn.addEventListener("click", () => checkAnswer(trueBtn)); // Look further into
falseBtn.addEventListener("click", () => checkAnswer(falseBtn)); // Look further
nextBtn.addEventListener("click", updateQuestion);
