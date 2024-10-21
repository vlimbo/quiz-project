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

const enableBtns = () => {
  buttons[0].disabled = "false";
  buttons[1].disabled = "false";
};

const disableBtns = () => {
  buttons[0].disabled = "true";
  buttons[1].disabled = "true";
};

const isCorrect = (guess) => {};

// real-time display
displayStatement();

// event listeners
buttons[0].addEventListener("click", isCorrect);
