const billInput = document.getElementById("bill-input");
const customTip = document.getElementById("custom-tip");
const tipBtns = document.querySelectorAll(".tip-btn");
const tipPerPerson = document.getElementById("tip-per-person");
const tipTotal = document.getElementById("tip-total");
const totalBill = document.getElementById("total-bill");
const numberOfPeople = document.getElementById("number-of-people");

// console.log(tip);
// console.log(`Button with ${tipPercentage} clicked!`);

//Event Listener:  User clicks a tip button after entering a bill amount
tipBtns.forEach((button) => {
  button.addEventListener("click", handleTip);
});

function handleTip(e) {
  const button = e.target;
  const tipPercentage = parseFloat(button.dataset.percent);
  const people = parseFloat(numberOfPeople.value);
  const billAmount = parseFloat(billInput.value);

  //Calculate tip and total
  const tip = (billAmount * tipPercentage).toFixed(2);
  const total = (billAmount + parseFloat(tip)).toFixed(2);
  const tipPerPersonAmount = (tip / people).toFixed(2);

  //If no entry or number of people is 1 or less
  if (isNaN(people) || people <= 1) {
    tipPerPerson.textContent = `$${tip}`;
  } else {
    tipPerPerson.textContent = `$${tipPerPersonAmount}`;
  }

  //Updating UI
  tipTotal.textContent = `$${tip}`;
  totalBill.textContent = `$${total}`;
}

// Or user creates a custom tip with pop-up entry

//User also has to enter the number of people sharing the tip

//Tip amount total displays

//Total bill + tip displays

//Make sure that the app can be reset with reset button

//Edge cases

//Error messages

//If no people entered assume it is only one person
