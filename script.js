var x_input = document.getElementById("xinput");
var y_input = document.getElementById("yinput");
var addbutton = document.getElementById("addbutton");
var subtractionbutton = document.getElementById("subtractionbutton");
var multiplicationbutton = document.getElementById("multiplicationbutton");
var divisionbutton = document.getElementById("divisionbutton");
var result = document.getElementById("result");
addbutton.addEventListener("click", function (event) {
  var x = parseInt(x_input.value);
  var y = parseInt(y_input.value);
  var sum = x + y;
  result.textContent = sum;
});

subtractionbutton.addEventListener("click", function (event) {
  var x = parseInt(x_input.value);
  var y = parseInt(y_input.value);
  var difference = x - y;
  result.textContent = difference;
});

multiplicationbutton.addEventListener("click", function (event) {
  var x = parseInt(x_input.value);
  var y = parseInt(y_input.value);
  var product = x * y;
  result.textContent = product;
});

divisionbutton.addEventListener("click", function (event) {
  var x = parseInt(x_input.value);
  var y = parseInt(y_input.value);
  if (y === 0) {
    result.textContent = "Cannot divide by zero";
  } else {
    var quotient = x / y;
    result.textContent = quotient;
  }
});
