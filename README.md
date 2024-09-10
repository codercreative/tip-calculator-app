# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [To Do](#to-do)
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

![](./screenshot.jpg)

### Links

- [Solution URL](https://github.com/codercreative/tip-calculator-app)
- [Live Site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### To Do

Remove the 0 from the input fields when the user enters the dollar amount and number of people

When clicking away from the input make sure that the fields go back to original state

Add green / red border around the input fields based on user interaction

Make the custom tip input work ("custom" disappears; user can enter numbers (from 1 - 100); calculate tips)

Resolve the NaN error for the tip amount per person when user does not enter data in the input fields

Make input fields a certain width in large screen sizes

### What I learned

**Overall comment about UI/UX:** I decided to modify the UI to improve the user experience (UX). It felt more intuitive to have the user first enter the bill amount, then the number of people, and finally select the tip percentage. This adjustment creates a more logical flow, as the tip selection naturally follows after the essential inputs (bill and number of people), rather than being placed between them.

Inserting the dollar and person icons:

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

Right-align the error messages to the label titles:

```js
/* Right-align the error messages to the label titles */
.bill-label,
.people-label {
  display: flex;
  justify-content: space-between;
}
```

Use of `this` key word allows me to apply the same styling logic to both the billInput and numberOfPeople inputs.

```js
// Handle styling of user input for bill amount and number of people
billInput.addEventListener("focus", styleInput);
numberOfPeople.addEventListener("focus", styleInput);

function styleInput() {
  this.style.fontSize = "1.5rem";
  this.style.color = "var(--very-dark-cyan)";
  this.style.fontWeight = "700";
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

### Continued development

At some point, I could refactor this project into a React application for a more efficient rendering process, etc.

## Author

- [Frontend Mentor](https://www.frontendmentor.io/profile/codercreative)
