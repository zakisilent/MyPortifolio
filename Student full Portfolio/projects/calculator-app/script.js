// Get the input element (like <input id="display">) where numbers and results will be shown
const display = document.getElementById("display");

// Select all <button> elements on the page and store them in a NodeList (like an array)
const buttons = document.querySelectorAll("button");


// Loop through each button in the NodeList using forEach
buttons.forEach(btn => {

  // Add a "click" event listener to each button
  btn.addEventListener("click", () => {

    // Get the text that appears on the button (e.g. "1", "+", "=", "C")
    const value = btn.textContent;

    // If the user clicks the "C" button, clear the entire display
    if (value === "C") {
      display.value = "";
    }

    // If the user clicks the "←" (backspace) button, remove the last character
    else if (value === "←") {
      display.value = display.value.slice(0, -1);
    }

    // If the user clicks the "=" button, try to calculate the result
    else if (value === "=") {
      try {
        // Use eval() to evaluate the math expression in the display
        // Example: if display.value = "2+3*4", eval() returns 14
        display.value = eval(display.value);
      } catch {
        // If there's an error in the expression (like "2++3"), show "Error"
        display.value = "Error";
      }
    }

    // For any other button (numbers or operators), add its value to the display
    else {
      display.value += value;
    }
  });
});
