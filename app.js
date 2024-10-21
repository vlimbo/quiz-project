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

displayStatement();
