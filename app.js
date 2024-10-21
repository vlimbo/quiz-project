// variables
statement = document.querySelector(".main__fun-fact");
buttons = document.querySelector(".main__btn-container").children;

// objects
const facts = {
  StringsAreMutuable: false,
};

// functions
const displayFact = () => {
  statement.textContent = "This is a very fun fact";
};
