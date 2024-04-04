// Function to append value to display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Function to delete last character from display
function deleteLastChar() {
  var displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}

// Function to calculate the expression in the display
function calculate() {
  var expression = document.getElementById("display").value;
  var result;
  try {
    result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function toggleCalculator() {
  var display = document.getElementById("display");
  var buttons = document.querySelectorAll(".calculator button:not(.on-off)");
  if (display.value === "" || display.value === "0") {
    display.value = "0";
    buttons.forEach(function (button) {
      button.disabled = false;
    });
  } else {
    display.value = "";
    buttons.forEach(function (button) {
      button.disabled = true;
    });
  }
}

function appendToDisplay(value) {
  var display = document.getElementById("display");
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Function to change background colors
function changeColors() {
  var bodyColor = getRandomLightColor();
  var calculatorColor = getRandomLightColor();

  document.body.style.backgroundColor = bodyColor;
  document.querySelector(".calculator").style.backgroundColor = calculatorColor;
}

// Function to generate random light color
function getRandomLightColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
