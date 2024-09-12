# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Design preview for the Tip Calculator](./images/screenshot.png)

### Links

- [Solution URL](https://github.com/codercreative/tip-calculator-app)
- [Live Site URL](https://tip-calculator-chris.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

**Overall comment about UI/UX:**

- **Input Order**

  - The input fields have been reordered for a more intuitive user flow:
    1. Enter the bill amount
    2. Enter the number of people
    3. Select the tip percentages

- **Tip Percentages**

  - The fixed tip amounts have been updated to more realistic values (The original design included a tip amount of 50%)

- **Result Labels**
  - I also changed the results to Tip Amount/person, Total Tip, and Total Bill (instead of Tip Amount/person, and Total/person) as that made more sense to me.

**Other Notes:**

How I resolved inserting the dollar and person icons:

```css
.bill-input,
.people-input {
  background: var(--very-light-greyish-cyan);
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 0.5em 0;
  color: var(--greyish-cyan);
  margin-bottom: 1em;
  background-repeat: no-repeat;
  /* center the icon and the dollar amount on the same line */
  background-position: 10px center;
  /* Number 0 right-aligned */
  text-align: right;
}

.bill-input {
  background-image: url("images/icon-dollar.svg");
}

.people-input {
  background-image: url("images/icon-person.svg");
```

Auto-hiding placeholder text upon focus in input fields:

```css
.bill-input:focus::placeholder,
.people-input:focus::placeholder,
.custom-tip-btn:focus::placeholder {
  color: transparent;
}
```

Right-align the error messages to the label titles:

```css
/* Right-align the error messages to the label titles */
.bill-label,
.people-label {
  display: flex;
  justify-content: space-between;
}
```

Since the custom tip button is an input field and not a button, I had to make sure that the input field and the tip buttons would be the same width across all devices. Thankfully, it was a simple solution: I just added a `width: 100%`:

```css
.tip-btn,
.custom-tip-btn {
  background-color: var(--very-dark-cyan);
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.3em 0;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  /* Make tip buttons and custom-tip-btn the same width across all devices */
  width: 100%;
}
```

Remember to include Number() in front of tip in the second line because `tip.toFixed(2)` returns a string.

```js
 //Calculate tip and total
  const tip = (billAmount * tipPercentage).toFixed(2);
  const total = (billAmount + Number(tip)).toFixed(2);
  const tipPerPersonAmount = (tip / people).toFixed(2);
};
```

Making sure that there is enough contrast for text with `filter: contrast(120%)`:

```css
.reset-btn {
  width: 100%;
  text-transform: uppercase;
  background: var(--strong-cyan);
  font-weight: 700;
  color: var(--very-dark-cyan);
  /*Ensure enough contrast */
  filter: contrast(120%);
  border-radius: 5px;
  padding: 0.5em 0;
  border: none;
  margin-top: 0.5em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
```

### Continued development

- Refactor the code to make it more DRY.
- Create an error message if the custom tip is too high.

## Author

- [Frontend Mentor](https://www.frontendmentor.io/profile/codercreative)
