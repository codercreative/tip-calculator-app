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

//Event listeners for focus state
billInput.addEventListener("focus", handleFocus);
numberOfPeople.addEventListener("focus", handleFocus);

// Event listeners for blur state
billInput.addEventListener("blur", handleBlur);
numberOfPeople.addEventListener("blur", handleBlur);

//Focus state -- handle styling when user inputs bill amount and number of people
function handleFocus() {
  this.style.fontSize = "1.5rem";
  this.style.color = "var(--very-dark-cyan)";
  this.style.fontWeight = "700";
  this.style.padding = "0";

  if (this === billInput) {
    billErrorMsg.textContent = "";
    billInput.style.border = "2px solid var(--strong-cyan)";
  }

  if (this === numberOfPeople) {
    peopleErrorMsg.textContent = "";
    numberOfPeople.style.border = "2px solid var(--strong-cyan)";
  }
}

//Blur state -- handle styling when user clicks outside the input fields
function handleBlur() {
  this.style.fontSize = "1.5rem";
  this.style.color = "var(--very-dark-cyan)";
  this.style.fontWeight = "700";
}

// User clicks a tip button after entering a bill amount
tipBtns.forEach((button) => {
  button.addEventListener("click", handleTip);
});

function handleTip(e) {
  const button = e.target;
  const tipPercentage = Number(button.dataset.percent);
  const people = Number(numberOfPeople.value);
  const billAmount = Number(billInput.value);

  //Error handling for missing input values
  if (!billAmount) {
    billErrorMsg.textContent = "Please enter the total bill amount";
    billInput.style.border = "2px solid var(--error-red)";
  } else {
    billErrorMsg.textContent = "";
    billInput.style.border = "";
  }

  if (!people) {
    peopleErrorMsg.textContent = "Can't be zero";
    numberOfPeople.style.border = "2px solid var(--error-red)";
  } else {
    peopleErrorMsg.textContent = "";
    numberOfPeople.style.border = "none";
  }

  const tip = (billAmount * tipPercentage).toFixed(2);
  const total = (billAmount + Number(tip)).toFixed(2);
  const tipPerPersonAmount = (tip / people).toFixed(2);

  if (billAmount > 0 && people > 0) {
    //Updating UI
    tipPerPerson.textContent = `$${tipPerPersonAmount}`;
    tipTotal.textContent = `$${tip}`;
    totalBill.textContent = `$${total}`;
  } else {
    //Default state
    tipPerPerson.textContent = `$0.00`;
    tipTotal.textContent = `$0.00`;
    totalBill.textContent = `$0.00`;
  }
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

// Handle custom tip input
customTip.addEventListener("input", handleCustomTip);

function handleCustomTip(e) {
  const people = Number(numberOfPeople.value);
  const billAmount = Number(billInput.value);
  const userEnteredTipPercentage = Number(customTip.value) / 100;

  const tip = (billAmount * userEnteredTipPercentage).toFixed(2);
  const total = (billAmount + Number(tip)).toFixed(2);
  const tipPerPersonAmount = (tip / people).toFixed(2);

  if (billAmount > 0 && people > 0) {
    //Updating UI
    tipPerPerson.textContent = `$${tipPerPersonAmount}`;
    tipTotal.textContent = `$${tip}`;
    totalBill.textContent = `$${total}`;
  } else {
    //Default state
    tipPerPerson.textContent = `$0.00`;
    tipTotal.textContent = `$0.00`;
    totalBill.textContent = `$0.00`;
  }
}
