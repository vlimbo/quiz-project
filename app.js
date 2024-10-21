// variables
statement = document.querySelector(".main__fun-fact");
trueBtn = document.querySelector(".main__btn-true");
falseBtn = document.querySelector(".main__btn-false");

// objects
const facts = {
  StringsAreMutuable: false,
};

// functions
const displayFact = () => {
  statement.textContent = "This is a very fun fact";
};

// event listeners
trueBtn.addEventListener("click", displayFact);
