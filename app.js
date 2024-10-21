// variables
statement = document.querySelector(".main__question");
buttons = document.querySelector(".main__btn-container").children;
explanation = document.querySelector(".main__fun-fact");

// objects
const fact = {
  statement: "Strings are mutuable datatypes",
  answer: false,
  explanation: "Strings are immutable, meaning they cannot be changed",
};

// functions
const displayStatement = () => {
  statement.textContent = fact.statement;
};

const enableBtns = (btn) => {
  btn.disabled = false;
};

const disableBtns = (btn) => {
  btn.disabled = true;
};

const isCorrect = (guess) => {
  console.log("clicked");
  return guess === fact.answer;
};

// real-time display
displayStatement();

// event listeners
buttons[0].addEventListener("click", () => isCorrect(true)); // This still amazes me
buttons[1].addEventListener("click", () => isCorrect(false)); // Also still amazes me
