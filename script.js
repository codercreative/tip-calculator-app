const billInput = document.getElementById("bill-input");
const customTip = document.getElementById("custom-tip");
const tipBtns = document.querySelectorAll(".tip-btn");
const tipPerPerson = document.getElementById("tip-per-person");
const tipTotal = document.getElementById("tip-total");
const totalBill = document.getElementById("total-bill");
const numberOfPeople = document.getElementById("number-of-people");
const billErrorMsg = document.getElementById("bill-error-msg");
const peopleErrorMsg = document.getElementById("people-error-msg");
const resetBtn = document.getElementById("reset-btn");

billInput.value = 0;
numberOfPeople.value = 0;

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

// Or user creates a custom tip with pop-up entry

resetBtn.addEventListener("click", resetTipCalc);

//Reset button
function resetTipCalc() {
  billInput.value = "0";
  numberOfPeople.value = "0";
  tipPerPerson.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  totalBill.textContent = "$0.00";
}
