const billInput = document.getElementById("bill-input");
const tipBtns = document.querySelectorAll(".tip-btn");
const tipPerPerson = document.getElementById("tip-per-person");
const tipTotal = document.getElementById("tip-total");
const totalBill = document.getElementById("total-bill");
const numberOfPeople = document.getElementById("number-of-people");
const billErrorMsg = document.getElementById("bill-error-msg");
const peopleErrorMsg = document.getElementById("people-error-msg");
const resetBtn = document.getElementById("reset-btn");
const customTip = document.getElementById("custom-tip-btn");

//Event Listener:  User clicks a tip button after entering a bill amount
tipBtns.forEach((button) => {
  button.addEventListener("click", handleTip);
});

function handleTip(e) {
  const button = e.target;
  const tipPercentage = Number(button.dataset.percent);
  const people = Number(numberOfPeople.value);
  const billAmount = Number(billInput.value);

  //Validation
  if (!billAmount) {
    billErrorMsg.textContent = "Please enter the total bill amount";
  } else {
    billErrorMsg.textContent = "";
  }

  if (!people) {
    peopleErrorMsg.textContent = "Can't be zero";
  } else {
    peopleErrorMsg.textContent = "";
  }

  //Calculate tip and total
  const tip = (billAmount * tipPercentage).toFixed(2);
  const total = (billAmount + Number(tip)).toFixed(2);
  const tipPerPersonAmount = (tip / people).toFixed(2);

  //Updating UI
  tipPerPerson.textContent = `$${tipPerPersonAmount}`;
  tipTotal.textContent = `$${tip}`;
  totalBill.textContent = `$${total}`;
}

// Handle styling of user input for bill amount and number of people
billInput.addEventListener("focus", styleInput);
numberOfPeople.addEventListener("focus", styleInput);

function styleInput() {
  this.style.fontSize = "1.5rem";
  this.style.color = "var(--very-dark-cyan)";
  this.style.fontWeight = "700";
  this.style.border = "var(--strong-cyan)";
}

//Reset button event listener and function
resetBtn.addEventListener("click", resetTipCalc);

function resetTipCalc() {
  billInput.value = "";
  billInput.fontSize = "1rem";
  numberOfPeople.value = "";
  numberOfPeople.fontSize = "1rem";
  tipPerPerson.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  totalBill.textContent = "$0.00";
}

// Handle customer tip input
customTip.addEventListener("input", handleCustomTip);

function handleCustomTip() {
  customTip.style.fontSize = " 1.2rem";
  customTip.style.color = "var(--very-dark-cyan)";

  let customTipValue = Number(customTip.value);

  if (customTipValue > 0 || customTipValue < 100) {
  }
}
