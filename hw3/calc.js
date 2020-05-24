"use strict";

var firstOperand = "";
var secondOperand = "";
var operator = "";
var result = "";

var isNewOperation = true;

// refresh display on load
$(function() {
  $("#display").val("");
});


// add digits to first and second operands
$("button[id^='button']").click(function() {
  if (isNewOperation) {
    firstOperand += $(this).val();
    $("#display").val(firstOperand);
  } else {
    secondOperand += $(this).val();
    $("#display").val(secondOperand);
  }
});

// handle operator button clicks
$(".operator").click(function() {
  isNewOperation = false;

  // if there is already a second operand in place, do the caclulation
  // first
  if (secondOperand !== "") {
    calculateResult();
  }

  // register the latest operator
  var currId = $(this).attr("id");
  operator = getOperatorFromId(currId);
});


// calculate the results whenever the equal button is pressed
$("#equalsButton").click(function() {
  if (operator !== "") {
    calculateResult();
    isNewOperation = true;
  }
});

function calculateResult() {
  if (firstOperand === "") {
    firstOperand = result;
  }

  var firstNo = Number(firstOperand);
  var secondNo = Number(secondOperand);

  if (operator === "+") {
    result = firstNo + secondNo;
  } else if (operator === "-") {
    result = firstNo - secondNo;
  } else if (operator === "*") {
    result = firstNo * secondNo;
  } else {
    result = firstNo / secondNo;
  }

  $("#display").val(result);
  firstOperand = "";
  secondOperand = "";
  operator = "";
}

function getOperatorFromId(currId) {
  var operator = "";

  if (currId === "addButton") {
    operator = "+";
  } else if (currId === "subtractButton") {
    operator = "-";
  } else if (currId === "multiplyButton") {
    operator = "*";
  } else {
    operator = "/";
  }

  return operator;
}

// handle clear button click
$("#clearButton").click(function() {
  $("#display").val("");
  firstOperand = "";
  secondOperand = "";
  operator = "";
  result = "";
  isNewOperation = true;
});
